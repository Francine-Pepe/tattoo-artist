import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { type AppointmentData } from "../types";

export const getBookedSlotsForDay = async (date: string): Promise<string[]> => {
  const q = query(collection(db, "appointments"), where("date", "==", date));
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data().time as string);
};

export const bookSlot = async (
  date: string,
  time: string,
  data: AppointmentData
) => {
  const id = `${date}_${time}`;

  await setDoc(doc(db, "appointments", id), {
    date,
    time,
    ...data,
    createdAt: serverTimestamp(),
  });
};

/* import {
  doc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";

export const getBookedSlotsForDay = async (date: string) => {
  const q = query(collection(db, "appointments"), where("date", "==", date));

  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data().time);
};

export const bookSlot = async (date: string, time: string, data: any) => {
  const id = `${date}_${time}`;

  await setDoc(doc(db, "appointments", id), {
    date,
    time,
    ...data,
    createdAt: serverTimestamp(),
  });
};
 */
