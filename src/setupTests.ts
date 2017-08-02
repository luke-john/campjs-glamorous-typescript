// tslint:disable-next-line no-var-requires
const serializer = require('jest-glamor-react') as any

expect.addSnapshotSerializer(serializer)
