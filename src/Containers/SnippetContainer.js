import React from "react"
import { connect } from "react-redux"
import SnippetComponent from "../Components/Snippets/SnippetComponent";
import { toggleLike } from "../Actions/SnippetActions";
import {createGistForUser} from "../Actions/GistActions";

const stateToPropertyMapper = (state) => ({
    activeUser : state.userReducer.user
})

const propertyToDispatchMapper = (dispatch) => ({
    createGistForUser: (token, title, description, content) => createGistForUser(dispatch, token, title, description, content),
    toggleLike: (activeUser, snippet) => toggleLike(dispatch, activeUser, snippet)
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(SnippetComponent)
