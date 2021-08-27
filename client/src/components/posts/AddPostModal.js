import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/esm/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { PostContext } from '../../contexts/PostContext'

const AddPostModal = () => {
    //Context
    const {
        showAddPostModal,
        setShowAddPostModal,
        addPost,
        setShowToast
    } = useContext(PostContext)

    //State dể lưu lại những giá trị điền bào modal
    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        url: '',
        status: 'prepare'
    })

    const { title, description, url } = newPost

    const onChangeNewPostForm = event => setNewPost({ ...newPost, [event.target.name]: event.target.value })

    const closeDialog = () => {
        resetAddPostData()
    }

    const onSubmit = async event => {
        event.preventDefault()
        const { success, message } = await addPost(newPost)
        resetAddPostData()
        setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
    }

    const resetAddPostData = () => {
        setNewPost({ title: '', description: '', url: '', status: 'finished' })
        setShowAddPostModal(false)
    }


    return (
        // onHide là trong react boostrap
        <Modal show={showAddPostModal} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>How did you enter the contest?</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    {/* <Form.Group>
                        <Form.Control
                            // as='textarea'
                            // row={3} // để nó cao có 3 dòng
                            placeholder='Online or Offline'
                        // name='description'
                        />
                    </Form.Group> */}
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='How old are you?'
                            name='title'
                            required aria-describedby='title-help'
                            value={title}
                            onChange={onChangeNewPostForm}
                        />
                        <Form.Text id='title-help' muted></Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            as='textarea'
                            row={3} // để nó cao có 3 dòng
                            placeholder='What is a your job?'
                            name='description'
                            value={description}
                            onChange={onChangeNewPostForm}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type='text'
                            placeholder='What field do you want to participate in?'
                            name='url'
                            value={url}
                            onChange={onChangeNewPostForm}
                        />
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Control
                            // type='text'
                            placeholder='Total Prizes(VND)?'
                        // name='url'
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            // type='text'
                            placeholder='SĐT'
                        // name='url'
                        />
                    </Form.Group> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={closeDialog}>
                        Cancel
                    </Button>
                    <Button variant='primary' type='submit'>
                        Go Contest !!!
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default AddPostModal
