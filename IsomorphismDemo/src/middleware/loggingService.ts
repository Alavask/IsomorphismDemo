import { postData } from "../utils/httpService";

export const loggingService = store => next => action => {
    const taskId = 123; // Long
    const sessionGuid = 'uuid'; // Guid
    const actions = []; // ActionDescription[]
    const isTaskFinished = false; // bool
    postData('localhost:54446/RegisterUserActions', {taskId, sessionGuid, actions, isTaskFinished});
    let result = next(action);
    return result;
};