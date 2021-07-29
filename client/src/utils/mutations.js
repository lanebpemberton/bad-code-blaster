import { gql } from "@apollo/client";

export const MUTATION_LOGIN = gql`
  mutation loginUser($email: String, $password: String) {
      login(email: $email, password: $password) 
     {
      _id
      username
      email
      
    
      }
    }
`;

export const MUTATION_CREATE_USER = gql`
  mutation createUser($username: String, $email: String, $password: String, $ship_id: ID) {
    addUser(username: $username, email: $email, password: $password, current_ship: $ship_id) {
      _id
      username
      email
      current_ship {
        ship_name
      }
    }
  }
`;

export const MUTATION_CHANGE_SHIP = gql`
  mutation changeUserShip($user_id: ID, $ship_id: ID) {
    changeShip(user_id: $user_id, ship_id: $ship_id) {
      _id
      username
      current_ship {
        ship_name
      }
    }
  }
`;

export const MUTATION_ADD_HIGHSCORE = gql`
  mutation addHighscore($user_id: ID, $ship_id: ID, $score: Int, $time_alive: Int, $enemies_killed: Int, $bad_code_blasted: Int) {

    addHighscore(user_id: $user_id, ship_id: $ship_id, score: $score, time_alive: $time_alive, enemies_killed: $enemies_killed, bad_code_blasted: $bad_code_blasted) {
      score
      time_alive
      enemies_killed
      bad_code_blasted
      timestamp
      ship_id {
        ship_name
      }
      user_id {
        username
      }
    }
  }
`;