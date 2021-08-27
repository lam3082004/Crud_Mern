import React from 'react'
import { Link} from 'react-router-dom'

const club = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col">

                    </div>
                    <div class="col-10 mt-5">
                        <Link
                            to='/login2'
                        >
                        <button>
                                <h1>
                                    Go to Message
                                </h1>
                            </button>   
                        </Link>
                    </div>
                    <div class="col">
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default club
