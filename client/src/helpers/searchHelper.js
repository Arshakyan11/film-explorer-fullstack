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
    dispatch(
      recivingData({
        query: arg,
        searchType: "navigationSearch",
      }),
    );
  } else {
    dispatch(recivingData(""));
  }
};

export const HandleSearchMAIN = (arg, dispatch, recivingDataMAIN) => {
  if (!bannedWords.includes(arg)) {
    dispatch(
      recivingDataMAIN({
        query: arg,
        searchType: "mainSearch",
      }),
    );
  } else {
    dispatch(recivingDataMAIN(""));
  }
};
