// db.js
import Dexie from "dexie";
import moment from "moment";

export const db = new Dexie("dowfy");
db.version(1).stores({
  history: "++id, title, url, image, ts", // Primary key and indexed props
});

export const store = (title, url, img) => {
  const ts = moment().toISOString();
  const id = db.history.add({
    title,
    url,
    img,
    ts,
  });
  return id;
};
