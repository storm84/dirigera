import type { Got } from 'got-cjs'
import type { Home } from '../types/Home'

export default (got: Got, accessToken?: string) => {
  if (!accessToken) {
    throw new Error('Access token is missing.')
  }
  return {
    async list() {
      const home = (await got.get(`home`).json()) as Home
      return home.deviceSets
    },

    // TODO add device-set management APIs
    //  * createDeviceSet
    //  * deleteDeviceSet
    //  * updateDeviceSet
    //  * updateDeviceSetConfig
    // TODO cover device-type specific attribute changes

    async setIsOn({ id, isOn }: { id: string; isOn: boolean }) {
      return got
        .patch(`devices/set/${id}`, {
          json: [
            {
              attributes: {
                isOn,
              },
            },
          ],
        })
        .json()
    },

    // TODO low level API, shouldn't be exposed
    async setAttributes({
      id,
      attributes,
      transitionTime,
    }: {
      id: string
      attributes: Record<string, any>
      transitionTime?: number
    }) {
      return got
        .patch(`devices/set/${id}`, {
          json: [
            {
              attributes,
              transitionTime,
            },
          ],
        })
        .json()
    },
  }
}
