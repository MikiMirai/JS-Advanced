function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = []
        }

        addComment(comment) {
            this.comments.push(comment)
        }

        toString() {
            let superString = super.toString()
            let rating = this.likes - this.dislikes;

            if (this.comments.length > 0) {
                let commentsText = '';
                for (let i = 0; i < this.comments.length; i++) {
                    commentsText += `\n * ${this.comments[index]}`
                }
                return `${superString}\nRating: ${rating}\nComments:${commentsText}`
            } else {
                return `${superString}\nRating: ${rating}`
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let superString = super.toString()

            return superString + `\nViews: ${this.views}`
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}