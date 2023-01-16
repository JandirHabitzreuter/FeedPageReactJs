import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/28264580?v=4' />
          <div className={styles.authorInfo}>
            <strong>Jandir Habitzreuter</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="15 de Janeiro às 19:00:00" dateTime="2023-01-15 19:00:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Send a comment"
        />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>
    </article>
  )
}