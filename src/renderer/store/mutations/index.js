import MUTATION_TYPES from "./types";

import setNewPlayerScores from "./set-new-player-scores";
import hideQuestionCard from "./hide-question-card";

export default {
    [MUTATION_TYPES.SET_NEW_PLAYER_SCORES]: setNewPlayerScores,
    [MUTATION_TYPES.HIDE_QUESTION_CARD]: hideQuestionCard,
}