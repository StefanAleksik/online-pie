// participants
export const getParticipants = (store) => store.participants;

// slices
export const getSlices = (store) => store.slices;

// ceremony
export const getPosition = (store) => store.ceremony.position;
export const getWinner = (store) => store.ceremony.winner;
export const getMsg = (store) => store.ceremony.msg;
export const getConfetti = (store) => store.ceremony.confetti;
