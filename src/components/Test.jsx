import Tictactoe from "./test/Tictactoe";
import Welcome from "./test/Welcome";
import UserList from "./test/UserList";
import {FeedbackForm} from "./test/FeedbackForm";
import {Counter} from "./test/Counter";

function Test(){
    return (<>
                <Welcome name="World"/>
                <UserList/>
                <Counter/>
                <FeedbackForm />
                <Tictactoe/>
            </>
    )
}

export {Test}
