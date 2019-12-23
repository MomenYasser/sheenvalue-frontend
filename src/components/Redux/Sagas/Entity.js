import {put , delay} from 'redux-saga/effects';
import EntityAction from '../Actions/Entity'
export default {
    *get({key , data}){
        const response = {todos: [{...data},
                {
                    task_name: "todo",
                    task_description: "task desc",
                    start_timer_button: "",
                    pause_timer_button: "",
                    drag_drop_indicator: "",
                    menu_icon: "",
                    star_icon: "",
                    mark_as_done_indicator: ""
                },
                {
                    task_name: "todo1",
                    task_description: "task desc1",
                    start_timer_button: "",
                    pause_timer_button: "",
                    drag_drop_indicator: "",
                    menu_icon: "",
                    star_icon: "",
                    mark_as_done_indicator: ""
                }
            ],statusCode:200};
        yield delay(3000);

        if(response.statusCode === 200){
            yield put(EntityAction.didGet(key,{todos: response.todos}));
        }
        else {
            yield put(EntityAction.catchGet(key,{errors:"Bad Request"}));
        }

    },
    *post({key ,data}){
    if(key === "Login"){
        const response = {ok : true};
        yield delay(3000);
        if(response.ok){
            yield put(EntityAction.didPost(key,{token:"@#$%^&^%$",data}));
        }else {
            yield put(EntityAction.catchPost(key,{errors:"Something went wrong"}));
        }
    }
    if (key === "Todos"){
        const response = {
            todo: {
                task_name:  data,
                task_description: "new task desc",
                start_timer_button: "",
                pause_timer_button: "",
                drag_drop_indicator: "",
                menu_icon: "",
                star_icon: "",
                mark_as_done_indicator: ""
            },ok:true
        };
        if(response.ok){
            yield put(EntityAction.didPost(key ,{todo:data}))

        }else{
            yield put(EntityAction.catchPost(key,{errors:"Something went wrong"}));
        }
    }


    }
}