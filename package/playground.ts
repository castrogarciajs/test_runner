import { z } from 'zod'
import { defineMessageProtocol } from './protocol'

const message = defineMessageProtocol({
  events: {
    LOG_IN: {
      email: z.string(),
      password: z.string(),
    },
    LOG_OUT: {},
  },
})

const send = message.createSender(window.postMessage)

send({
  type: 'LOG_IN',
  email: 'test',
  password: 'test',
})

message.createListener((event) => {})
