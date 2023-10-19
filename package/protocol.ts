import { z } from 'zod'
import { EventConfigToDiscriminatedUnion } from './types'

export const defineMessageProtocol = <
  T extends Record<string, z.ZodRawShape>,
  EventAsDiscoUnion = EventConfigToDiscriminatedUnion<T>,
>(opts: {
  events: T
}) => {
  return {
    createSender(func: (event: EventAsDiscoUnion) => void) {
      return func
    },
    createListener(func: (event: EventAsDiscoUnion) => void) {
      return func
    },
  }
}
