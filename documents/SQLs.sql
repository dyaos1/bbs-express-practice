-- Init Database --

DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS comment;

CREATE TABLE article (
    id          SERIAL      PRIMARY KEY,
    title       VARCHAR(50) NOT NULL,
    body        TEXT        NOT NULL,
    author_id   INTEGER     NOT NULL,
    created_at  TIMESTAMP   DEFAULT NOW,
    updated_at  TIMESTAMP,
);

CREATE TABLE comment (
    id          SERIAL      PRIMARY KEY,
    content     VARCHAR(200)    NOT NULL,
    article_id  INTEGER     NOT NULL,
    created_at  TIMESTAMP   DEFAULT NOW,
    updated_at  TIMESTAMP,
    FOREIGN KEY(article_id) REFERENCES article(id) ON DELETE CASCADE
);


-- SELECT * FROM TABLE with PAGINATION --
SELECT * FROM article ORDER BY id LIMIT 10 ROWS OFFSET ? ROWS;



-- SELECT 1 ARTICLE WITH COMMENTS --

SELECT * FROM article WHERE (id = ?);
SELECT * FROM comment WHERE (article_id = ?);



-- C

INSERT INTO article (title, body, author_id, updated_at) VALUES (?, ?, 0, ?);
INSERT INTO comment (content, article_id updated_at) VALUES (?, ?, ?, ?);