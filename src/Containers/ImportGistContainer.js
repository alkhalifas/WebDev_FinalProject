import React from "react";
import SnippetContainer from "./SnippetContainer";
import {
    addTagToSnippet, createLocalSnippet, createSnippet, deleteSnippet,
    editLocalSnippet, editLocalText,
    removeTagFromSnippet, togglePrivacy,
    updateSnippet
} from "../Actions/SnippetActions";
import {connect} from "react-redux";
import {getGistById, getGistFile, getGistsForUser} from "../Actions/GistActions";
import {getCookie} from "../config/db";
import {getUserByUID} from "../Actions/UserActions";

class ImportGistContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            requested: false,
            importSnippetTemplate: {
                id: "",
                gistId: "",
                creator: "",
                dateCreated: "",
                lastModified: "",
                title: "",
                description: "",
                codeText: "",
                tags: [],
                likes: [],
                shareableURL: "",
                publicPost: true,
                recommended: false
            }
        };
    }

    componentDidMount() {
        let fireUID = getCookie("uid")
        if (fireUID === "") {
            console.log("reaching conditional")
            window.location.href = '/login'
        }
        let temp = this.state.newSnippetTemplate
        temp.creator = this.props.activeUser.username
        this.props.getUserByUID(fireUID).then(() => this.props.createLocalSnippet(temp))
    }

    componentDidUpdate(prevProps, prevState, snapshot) { };

    importGist(gistId) {
        this.props.getGistById(gistId, this.props.activeUser.paToken)
            .then(() => {
                let files = Object.keys(this.props.gist.files)
                let fileName = files[0]
                let file = this.props.gist.files[fileName]
                this.props.getGistFile(file.raw_url).then(() => {
                    this.state.importSnippetTemplate.gistId = gistId;
                    this.state.importSnippetTemplate.creator = this.props.activeUser.username;
                    this.state.importSnippetTemplate.title = fileName;
                    this.state.importSnippetTemplate.description = this.props.gist.description;
                    this.state.importSnippetTemplate.codeText = this.props.gistContent;
                    this.props.createLocalSnippet(this.state.importSnippetTemplate);
                    this.setState({
                        requested: true
                    })
                })
            })
    };

    render () {
        return (
            <div>
                {
                    console.log("Active user from import gist container", this.props.activeUser)
                }
                {
                    console.log("Current snippet from import gist container", this.props.currentSnippet)
                }
                {
                    (!this.state.requested) &&
                        <div className="card col-12 mt-3">
                            <div className="card-body">
                                <div className="row">
                                    <label className="col-form-label d-none" htmlFor="importgistid">
                                        Import a Gist From GitHub
                                    </label>
                                    <div className="input-group col-12">
                                        <input
                                            id="importgistid"
                                            className="form-control col-12"
                                            placeholder="Enter the ID of a GitHub Gist"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-success"
                                                type="button"
                                                onClick={() => this.importGist(document.getElementById("importgistid").value)}>Import
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                {
                    (this.props.currentSnippet && this.state.requested) &&
                        <SnippetContainer
                            snippet={this.props.currentSnippet}
                            text={this.props.text}
                            create={true}
                            singleview={true}
                            editLocalSnippet={this.props.editLocalSnippet}
                            editLocalText={this.props.editLocalText}
                            updateSnippet={this.props.updateSnippet}
                            addTagToSnippet={this.props.addTagToSnippet}
                            removeTagFromSnippet={this.props.removeTagFromSnippet}
                            togglePrivacy={this.props.togglePrivacy}
                            deleteSnippet={this.props.deleteSnippet}
                            createSnippet={this.props.createSnippet}
                            activeUser={this.props.activeUser}
                        />
                }
            </div>
        )
    }
};

const stateToPropertyMapper = (state) => ({
    currentSnippet: state.snippetReducer.snippets[0],
    text: state.snippetReducer.text,
    gist: state.gistReducer.gist,
    gistContent: state.gistReducer.file,
    gists: state.gistReducer.gists,
    activeUser: state.userReducer.activeUser
})

const propertyToDispatchMapper = (dispatch) => ({
    createSnippet: (snippet, text) => createSnippet(dispatch, snippet, text),
    createLocalSnippet: (snippet) => createLocalSnippet(dispatch, snippet),
    editLocalSnippet: (snippet) => editLocalSnippet(dispatch, snippet),
    editLocalText: (text) => editLocalText(dispatch, text),
    updateSnippet: (snippet) => updateSnippet(dispatch, snippet),
    addTagToSnippet: (tag) => addTagToSnippet(dispatch, tag),
    removeTagFromSnippet: (tag) => removeTagFromSnippet(dispatch, tag),
    togglePrivacy: (snippet) => togglePrivacy(dispatch, snippet),
    deleteSnippet: (snippetId) => deleteSnippet(dispatch, snippetId),
    getGistById: (gistId, token) => getGistById(dispatch, gistId, token),
    getGistFile: (fileUrl) => getGistFile(dispatch, fileUrl),
    getUserByUID: (uid) => getUserByUID(dispatch, uid),
})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(ImportGistContainer)
