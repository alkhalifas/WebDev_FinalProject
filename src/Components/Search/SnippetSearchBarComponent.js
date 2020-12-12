import React from 'react'
import {Link} from "react-router-dom";

// const tempTags = "Python+SQL"
//
// const tagFromField = document.getElementById('searchtags')

const SnippetSearchBarComponent = ({findAllSnippets, snippets, searchSnippetsByTags}) =>
    <div className="row">
        <div className="col-10">
            <div className="row mt-4">
                <label className="col-form-label d-none" htmlFor="searchtags">
                    Search by Tag
                </label>
                <div className="input-group col-12">
                    <input
                        id="searchtags"
                        className="form-control col-12"
                        // value = ""
                        placeholder="Search by tags (eg: python+js+import)"
                    />
                    <div className="input-group-append">
                        <Link
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => {searchSnippetsByTags(document.getElementById("searchtags").value)}}
                            to={`/search${document.getElementById("searchtags") ? "/" + document.getElementById("searchtags").value : ""}`}
                        >
                            Search
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-2 row mt-4 ml-1">
            <Link className="btn btn-primary float-right" to="/newsnippet">
                New Snippet <i className="fa fa-pencil-square-o" aria-hidden="true"/>
            </Link>
        </div>

        {/*<div className="col-6 row mt-4 ml-1">*/}
        {/*    <label className="col-3 col-form-label d-none" htmlFor="filtersearch">*/}
        {/*        Filter Results*/}
        {/*    </label>*/}
        {/*    <div className="input-group">*/}
        {/*        <div className="input-group-prepend">*/}
        {/*            <span className="input-group-text" id="basic-addon1">*/}
        {/*                <i className="fa fa-filter" aria-hidden="true"></i>*/}
        {/*            </span>*/}
        {/*        </div>*/}
        {/*        <input id="filtersearch" className="form-control" placeholder="Filter results"/>*/}
        {/*    </div>*/}
        {/*</div>*/}



        {/*<div className="">*/}
        {/*    <button*/}
        {/*        className="btn btn-outline-primary"*/}
        {/*        type="button"*/}
        {/*        onClick={() => findAllSnippets()}>Search*/}
        {/*    </button>*/}
        {/*</div>*/}

    </div>

export default SnippetSearchBarComponent
