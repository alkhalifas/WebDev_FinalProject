import React from "react"
import {Link} from "react-router-dom";
import TagComponent from "../TagComponent";

const SnippetDisplayComponent = ({snippet}) =>
    <div className="card-body">
        {/*Title and Timestamp*/}
        <div className="row col-12">
            <div className="col-8">
                <Link to={`/snippet/${snippet.id}`} className="h5">{snippet.title}</Link>
            </div>
            <div className="col-4 text-secondary">
                <div className=" float-right ">
                    <h6>Published: {snippet.dateCreated}</h6>
                </div>
            </div>
        </div>
        {/*Snippet Description*/}
        <div className="row col-12">
            <p className="col-12">{snippet.description}</p>
        </div>
        {/*Snippet Content*/}
        <div className="p-3 col-12">
            <pre className="text-wrap">
                {snippet.codeText}

            </pre>
        </div>
        <div className="row col-12">
            {/*Creator*/}
            <div className="col-3">
                <h6>Created By: <a href="#">{snippet.creator}</a></h6>
            </div>
            {/*Tags*/}
            <div className="col-9 text-secondary float-right">
                <div className="float-right">
                    <div className="tagBackground rounded row ">
                        {
                            (snippet.tags !== null && snippet.tags.length > 0) &&
                                snippet.tags.map((tag, index) =>
                                    <TagComponent
                                        key={index}
                                        tag={tag}
                                        snippet={snippet}
                                        edit={false}
                                    />
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

export default SnippetDisplayComponent
