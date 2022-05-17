import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEntries } from '../context/PlannerContext';
import { parseDate, unparseDate } from '../utils/parseDate';

import styles from './Entry.css';

export default function Entry() {
  const { id } = useParams();
  const [entry, setEntry] = useState({});
  const { entries, getEntry, editEntry } = useEntries();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEntry(getEntry(id));
  }, [id, entries.length]);

  const HandleEditButton = () => {
    console.log(unparseDate(entry.date), entry.title);

    isEditing ? setIsEditing(false) : setIsEditing(true);
  };
  let content;

  if (isEditing) {
    content = (
      <form>
        <input
          type="text"
          name="title"
          value={entry.title}
          onChange={(e) =>
            editEntry({
              ...entry,
              // date: parseDate(e.target.value),
              title: e.target.value,
            })
          }
        />
        <input
          type="date"
          name="date"
          value={unparseDate(entry.date)}
          onChange={(e) =>
            editEntry({ ...entry, date: parseDate(e.target.value) })
          }
        />
        <textarea
          name="content"
          value={entry?.content}
          onChange={(e) =>
            editEntry({
              ...entry,
              content: e.target.value,
              // date: parseDate(e.target.value),
            })
          }
        />
      </form>
    );
  } else {
    content = (
      <article className={styles.entry}>
        <h1>{entry?.title}</h1>
        <p>Due: {entry?.date}</p>
        <p>{entry?.content}</p>
      </article>
    );
  }

  return (
    <>
      <Link to="/entries" className={styles.backButton}>
        &laquo; Back to Planner
      </Link>
      <button onClick={HandleEditButton}>{isEditing ? 'Save' : 'Edit'}</button>
      {content}
      {/* <article className={styles.entry}>
        <h1>{entry?.title}</h1>
        <p>Due: {entry?.date}</p>
        <p>{entry?.content}</p>
      </article> */}
    </>
  );
}
