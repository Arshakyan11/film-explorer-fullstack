let bannedWords = [
  "sex",
  "sexx",
  "sexxx",
  "sexxxx",
  "porn",
  "porno",
  "pornoo",
  "xx",
  "xxx",
  "xxxx",
  "xxxxx",
  "xxxxxx",
  "xxxxxxx",
  "xxxxxxxx",
];
export const HandleSearch = (arg, dispatch, recivingData) => {
  if (arg.length >= 2 && !bannedWords.includes(arg)) {
    dispatch(recivingData(arg));
  } else {
    dispatch(recivingData(""));
  }
};

export const HandleSearchMAIN = (arg, dispatch, recivingDataMAIN) => {
  if (!bannedWords.includes(arg)) {
    dispatch(recivingDataMAIN(arg));
  } else {
    dispatch(recivingDataMAIN(""));
  }
};
