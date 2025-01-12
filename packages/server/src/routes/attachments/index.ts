import express from 'express'
import attachmentsController from '../../controllers/attachments'
import { getMulterStorage } from 'flowise-components'

const router = express.Router()

// CREATE
router.post('/:chatflowId/:chatId', getMulterStorage().array('files'), attachmentsController.createAttachment)

export default router
