class PostData {
    constructor(fetchObj) {
        this.id = fetchObj.id;
        this.userId = fetchObj.userId;
        this.title = fetchObj.title;
        this.body = fetchObj.body;
    }
}

export default PostData;