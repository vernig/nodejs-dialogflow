// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const sessionentitytypesModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
describe('v2.SessionEntityTypesClient', () => {
  it('has servicePath', () => {
    const servicePath =
      sessionentitytypesModule.v2.SessionEntityTypesClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      sessionentitytypesModule.v2.SessionEntityTypesClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = sessionentitytypesModule.v2.SessionEntityTypesClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new sessionentitytypesModule.v2.SessionEntityTypesClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
      fallback: true,
    });
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.sessionEntityTypesStub, undefined);
    await client.initialize();
    assert(client.sessionEntityTypesStub);
  });
  it('has close method', () => {
    const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });
  describe('getSessionEntityType', () => {
    it('invokes getSessionEntityType without error', done => {
      const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.dialogflow.v2.IGetSessionEntityTypeRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getSessionEntityType = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getSessionEntityType(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getSessionEntityType with error', done => {
      const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.dialogflow.v2.IGetSessionEntityTypeRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getSessionEntityType = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getSessionEntityType(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createSessionEntityType', () => {
    it('invokes createSessionEntityType without error', done => {
      const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.dialogflow.v2.ICreateSessionEntityTypeRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createSessionEntityType = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createSessionEntityType(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createSessionEntityType with error', done => {
      const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.dialogflow.v2.ICreateSessionEntityTypeRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createSessionEntityType = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createSessionEntityType(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('updateSessionEntityType', () => {
    it('invokes updateSessionEntityType without error', done => {
      const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.dialogflow.v2.IUpdateSessionEntityTypeRequest = {};
      request.sessionEntityType = {};
      request.sessionEntityType.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateSessionEntityType = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateSessionEntityType(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateSessionEntityType with error', done => {
      const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.dialogflow.v2.IUpdateSessionEntityTypeRequest = {};
      request.sessionEntityType = {};
      request.sessionEntityType.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateSessionEntityType = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateSessionEntityType(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('deleteSessionEntityType', () => {
    it('invokes deleteSessionEntityType without error', done => {
      const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.dialogflow.v2.IDeleteSessionEntityTypeRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteSessionEntityType = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteSessionEntityType(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteSessionEntityType with error', done => {
      const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.dialogflow.v2.IDeleteSessionEntityTypeRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteSessionEntityType = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteSessionEntityType(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('listSessionEntityTypes', () => {
    it('invokes listSessionEntityTypes without error', done => {
      const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.dialogflow.v2.IListSessionEntityTypesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listSessionEntityTypes = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listSessionEntityTypes(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listSessionEntityTypesStream', () => {
    it('invokes listSessionEntityTypesStream without error', done => {
      const client = new sessionentitytypesModule.v2.SessionEntityTypesClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.dialogflow.v2.IListSessionEntityTypesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listSessionEntityTypes = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listSessionEntityTypesStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
});
