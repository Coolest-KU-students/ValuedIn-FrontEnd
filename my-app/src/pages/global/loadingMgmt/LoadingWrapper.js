import React from 'react'

export const LoadingWrapper = ({loaded, children}) => {
    return loaded
        ? (<> {children} </>)
        :( 
        <div>
            Loading...
        </div>
        )
}
