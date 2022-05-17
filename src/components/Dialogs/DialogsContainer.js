import {connect} from "react-redux";
import {compose} from "redux";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)
