import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import admin from '../../assets/admin.svg'
import Table from 'react-bootstrap/Table'

const Profile = () => {
    //const [avatar, setAvatar] = useState(false)
    const {
        authState: {
            user: { username, gmail, password }
        }
    } = useContext(AuthContext)

    return (
        <div className="profile_page">
            <div className="col-left">
                <h1>{username}</h1>
                <div className="avatar">
                    <img
                        src={admin}
                        alt='admin'
                        width='148'
                        height='148'
                        className='mr-2'
                    />
                    <span>
                        <i className="fas fa-camera"></i>
                        <p>Change</p>
                        <input type="file" name="file" id="file_up" />
                    </span>
                </div>
                <div className="form-group" >
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        defaultValue={username}
                    />
                </div>
                <div className="form-group" >
                    <label htmlFor="name">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your email address"
                        defaultValue={gmail}
                    />
                </div>
                <div className="form-group" >
                    <label htmlFor="password">Reset password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your password"
                        defaultValue={password}
                    />
                </div>
                <div className="form-group" >
                    <label htmlFor="cf_password">Confirm password</label>
                    <input
                        type="password"
                        name="cf_password"
                        id="cf_password"
                        placeholder="Confirm password"
                        defaultValue={password}
                    />
                </div>
                <button >Update</button>
            </div>
            <div className="col-right">
                <h1>Những thành tích đạt được</h1>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Profile;
