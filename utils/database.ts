/* eslint-disable */
/* tslint:disable */
// @ts-ignore
import * as SQLite from 'expo-sqlite';
import { Practice } from '../models/practice';

const database = SQLite.openDatabase('practice-progress.db');

export function init() {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    database.transaction(tx => {
      // @ts-ignore
      // @ts-ignore
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS practice (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      beat_value INTEGER NOT NULL,
      starting_tempo INTEGER NOT NULL,
      ending_tempo INTEGER NOT NULL,
      num_of_repetitions INTEGER NOT NULL,
      status INTEGER NOT NULL
    )`,
        [],
        () => {
          // @ts-ignore
          resolve();
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        (_: any, error: any) => {
          reject(error);
        },
      );
    });
  });
}

export function fetchPractices() {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    database.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM practice',
        [],
        (_: any, result: { rows: { _array: any; }; }) => {
          const practices = [];

          for (const item of result.rows._array) {
            practices.push(
              new Practice(
                item.title,
                item.description,
                item.beat_value,
                item.starting_tempo,
                item.ending_tempo,
                item.num_of_repetitions,
                item.status,
                item.id,
              ),
            );
          }
          // eslint-disable-next-line no-underscore-dangle
          resolve(practices);
          // eslint-disable-next-line no-console
          console.log(result);
        },
        (_: any, error: any) => {
          reject(error);
        },
      );
    });
  });
}

export function insertPractice(practice: Practice) {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    database.transaction(tx => {
      // @ts-ignore
      tx.executeSql(
        `INSERT INTO practice (title, description, beat_value, starting_tempo, ending_tempo, num_of_repetitions, status) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          practice.title,
          practice.description,
          practice.beatValue,
          practice.startingTempo,
          practice.endingTempo,
          practice.numberOfRepetitions,
          practice.status,
        ],
        // @ts-ignore
        (_, result) => {
          // eslint-disable-next-line no-console
          console.log(result);
          resolve(result);
        },
        // @ts-ignore
        (_, error) => {
          reject(error);
        },
      );
    });
  });
}
