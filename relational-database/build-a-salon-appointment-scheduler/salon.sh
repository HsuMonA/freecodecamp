#!/bin/bash
PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"

echo -e "\n~~~~ MY SALON ~~~~"
echo -e "\nWelcome to My Salon, how can I help you?\n"

MAIN_MENU() {
  if [[ $1 ]]
  then
    echo -e "\n$1"
  fi

  # get service list
  SERVICE_LIST=$($PSQL "SELECT service_id, name FROM services ORDER BY service_id")
  echo "$SERVICE_LIST" | while read SERVICE_ID BAR NAME
  do
    echo "$SERVICE_ID) $NAME"
  done
  read SERVICE_ID_SELECTED
  
  # if no service is selected
  if [[ -z $SERVICE_ID_SELECTED ]]
  then
    MAIN_MENU "I could not find that service. What would you like today?"
  # if input is not a number  
  elif [[ ! $SERVICE_ID_SELECTED =~ ^[1-5]+$ ]]
  then
    # send to main menu
    MAIN_MENU "I could not find that service. What would you like today?"
  else
    echo -e "\nWhat's your phone number?"
    read CUSTOMER_PHONE

    # get customer name
    CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE phone='$CUSTOMER_PHONE'")

    # if customer name doesn't exist
    if [[ -z $CUSTOMER_NAME ]]
    then
      # get new customer name
      echo -e "\nI don't have a record for that phone number, what's your name?"
      read CUSTOMER_NAME

      # insert new customer
      INSERT_CUSTOMER=$($PSQL "INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME', '$CUSTOMER_PHONE')")  
    fi

    # get customer id
    CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone='$CUSTOMER_PHONE'")
    
    # get service name from service id
    SERVICE_ID_INTO_NAME=$($PSQL "SELECT name FROM services WHERE service_id=$SERVICE_ID_SELECTED")

    # remove space in front of the service name
    SERVICE_ID_FORMATTED=$(echo $SERVICE_ID_INTO_NAME | sed 's/ //')

    # remove space in front of the customer name
    CUSTOMER_NAME_FORMATTED=$(echo $CUSTOMER_NAME | sed 's/ //')

    echo -e "\nWhat time would you like your $SERVICE_ID_FORMATTED, $CUSTOMER_NAME_FORMATTED?"
    read SERVICE_TIME

    INSERT_APPOINTMENT=$($PSQL "INSERT INTO appointments(customer_id, service_id, time) VALUES($CUSTOMER_ID, $SERVICE_ID_SELECTED, '$SERVICE_TIME')")
    echo -e "\nI have put you down for a $SERVICE_ID_FORMATTED at $SERVICE_TIME, $CUSTOMER_NAME_FORMATTED."  
  fi
}

MAIN_MENU
