#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"

# get random number between 1 and 1000
SECRET_NUMBER=$(( RANDOM % 1000 + 1))

# number of guesses start with 1
NUMBER_GUESSES=1

echo -e "\nEnter your username:"
read USER_NAME

# get username from user input
USER=$($PSQL "SELECT username FROM users WHERE username='$USER_NAME'")

# get the total number of games that the user has played
GAMES_PLAYED=$($PSQL "SELECT COUNT(*) FROM users INNER JOIN games USING(user_id) WHERE username='$USER_NAME'")

# get the fewest number of guesses it took that the user to win the game
BEST_GAME=$($PSQL "SELECT MIN(number_of_guesses) FROM users INNER JOIN games USING(user_id) WHERE username='$USER_NAME'")

# if the user doesn't exist
if [[ -z $USER ]]
then
  # insert the user name
  INSERT_USER_NAME=$($PSQL "INSERT INTO users(username) VALUES('$USER_NAME')")
  echo -e "\nWelcome, $USER_NAME! It looks like this is your first time here." 
else
  echo -e "\nWelcome back, $USER_NAME! You have played $GAMES_PLAYED games, and your best game took $BEST_GAME guesses."  
fi
# get the user id
USER_ID=$($PSQL "SELECT user_id FROM users WHERE username='$USER_NAME'")

echo -e "\nGuess the secret number between 1 and 1000:"
read INPUT_NUMBER

while [[ $INPUT_NUMBER -ne $SECRET_NUMBER ]]
do
  if [[ ! $INPUT_NUMBER =~ ^[0-9]+$ ]]
  then
    echo "That is not an integer, guess again:"
    read INPUT_NUMBER
  elif [[ $INPUT_NUMBER -gt $SECRET_NUMBER ]]
  then
    echo "It's lower than that, guess again:"
    read INPUT_NUMBER
  elif [[ $INPUT_NUMBER -lt $SECRET_NUMBER ]]
  then
    echo "It's higher than that, guess again:"
    read INPUT_NUMBER
  fi
  NUMBER_GUESSES=$(( $NUMBER_GUESSES + 1 ))
done

INSERT_GAME=$($PSQL "INSERT INTO games(number_of_guesses, user_id) VALUES($NUMBER_GUESSES, $USER_ID)")

echo "You guessed it in $NUMBER_GUESSES tries. The secret number was $SECRET_NUMBER. Nice job!"

