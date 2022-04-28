import DatabaseConnector from "./databaseConnector";

export default class UserSession {
    async userExists(username: string) {
        const user = await DatabaseConnector.getUserForUserName(username);
        return user.length > 0;
    }
}