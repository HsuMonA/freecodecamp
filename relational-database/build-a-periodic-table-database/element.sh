#!/bin/bash

PSQL="psql -X --username=freecodecamp --dbname=periodic_table --tuples-only -c"

# if the argument is between 0 - 9 
if [[ $1 =~ ^[0-9]+$ ]]
then
  #get atomic_number, name, symbol ... where atomic_number is the argument
  ELEMENT=$($PSQL "SELECT atomic_number, name, symbol, type, atomic_mass, melting_point_celsius, boiling_point_celsius FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE atomic_number=$1")
  # if the element doesn't exist
  if [[ -z $ELEMENT ]]
  then
    echo "I could not find that element in the database."
  else
    # get the input
    echo "$ELEMENT" | while read ATOMIC_NUMBER BAR NAME BAR SYMBOL BAR TYPE BAR ATOMIC_MASS BAR MELTING_POINT_CELSIUS BAR BOILING_POINT_CELSIUS
    do
      # show the output 
      echo -e "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING_POINT_CELSIUS celsius and a boiling point of $BOILING_POINT_CELSIUS celsius."
    done
  fi
# if the argument is a string
elif [[ $1 ]]
then
  # get atomic_number, name, symbol ... where the symbol or name is the argument
  ELEMENT=$($PSQL "SELECT atomic_number, name, symbol, type, atomic_mass, melting_point_celsius, boiling_point_celsius FROM elements INNER JOIN properties USING(atomic_number) INNER JOIN types USING(type_id) WHERE symbol='$1' OR name='$1'")
  if [[ -z $ELEMENT ]]
  then
    echo "I could not find that element in the database."
  else 
    # get the input
    echo "$ELEMENT" | while read ATOMIC_NUMBER BAR NAME BAR SYMBOL BAR TYPE BAR ATOMIC_MASS BAR MELTING_POINT_CELSIUS BAR BOILING_POINT_CELSIUS
    do
      # show the output
      echo -e "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING_POINT_CELSIUS celsius and a boiling point of $BOILING_POINT_CELSIUS celsius."
    done
  fi
else
  # show this following message
  echo "Please provide an element as an argument."
fi
