import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEntries } from '../context/PlannerContext';

import styles from './Entry.css';

export default function Entry() {
  const { id } = useParams();
  const [entry, setEntry] = useState({});
  const { entries, getEntry } = useEntries();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEntry(getEntry(id));
  }, [id, entries.length]);

  const HandleEditButton = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  };

  let content;

  if (isEditing) {
    content = (
      <form>
        <input type="text" name="title" value={entry?.title} />
        <input type="date" name="date" value={entry?.date} />
        <textarea name="content" value={entry?.content} />
        <button></button>
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
