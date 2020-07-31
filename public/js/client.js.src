function getAllTasks  ( pCallback ){
    $.ajax(
        `/api/tasks/`,
        {
            type: `GET`     
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function getAllUsers  ( pCallback ){
    $.ajax(
        `/api/users/`,
        {
            type: `GET`     
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function getUserByEmail( pEmail, pCallback ){
    $.ajax(
        `/api/userByEmail/${ pEmail }`,
        {
            type: `GET`
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function getAllProjects ( pCallback ){
    $.ajax(
        `/api/projects/`,
        {
            type: `GET`     
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function addUser( pData, pCallback ){
    $.ajax(
        `/api/users/`,
        {
            type: `POST`,
            data: pData
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function addTask( pData, pCallback ){
    $.ajax(
        `/api/tasks/`,
        {
            type: `POST`,
            data: pData
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function addProject( pData, pCallback ){
    $.ajax(
        `/api/projects/`,
        {
            type: `POST`,
            data: pData
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}

function addUser( pData, pCallback ){
    $.ajax(
        `/api/users/`,
        {
            type: `POST`,
            data: pData
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function updateUser( pId, pData, pCallback ){
    $.ajax(
        `/api/users/${ pId }`,
        {
            type: `PUT`,
            data: pData
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function updateTask( pId, pData, pCallback ){
    $.ajax(
        `/api/tasks/${ pId }`,
        {
            type: `PUT`,
            data: pData
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function updateProject( pId, pData, pCallback ){
    $.ajax(
        `/api/projects/${ pId }`,
        {
            type: `PUT`,
            data: pData
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function deleteUser( pId, pCallback ){
    $.ajax(
        `/api/users/${ pId }`,
        {
            type: `DELETE`,
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function deleteTask( pId, pCallback ){
    $.ajax(
        `/api/tasks/${ pId }`,
        {
            type: `DELETE`,
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function deleteProject( pId, pCallback ){
    $.ajax(
        `/api/projects/${ pId }`,
        {
            type: `DELETE`,
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function getUserProjects( pUserId,pCallback ){
    $.ajax(
        `/api/users/${ pUserId}/projects/`,
        {
            type: `GET`
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}
function getProjectTasks( pProjectId,pCallback){
    $.ajax(
        `/api/projects/${ pProjectId }/tasks/`,
        {
            type: `GET`
        }
    )
        .done( function( pData, pTextStatus, pJqXhr ){
            // TODO: Implement logic to execute after the request has completed
            pCallback( pData );
        } )
        .fail( function( pJqXhr, pTextStatus, pErrorThrown ){
            throw pErrorThrown;
        } );
}