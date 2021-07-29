  
import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query getMe {
    me {
      _id
      username
      email
      current_ship {
        ship_name
      }
      highscores {
        score
        timestamp
      }
    }
  }
`;

export const QUERY_USER_HIGHSCORE = gql`
  query User_Highscore($user_id: ID) {
    getUserHighScore(user_id: $user_id) {
      user_id {
        username
      }
      ship_id {
        ship_name
      }
      score
      enemies_killed
      time_alive
    }
  }
`;

export const QUERY_TOP_25 = gql`
  query top_25 {
    getTop25 {
      highscores {
        score
        user_id {
          username
        }
        ship_id {
          ship_name
        }
      }
    }
  }
`;