/* eslint-disable */
// @generated by protobuf-ts 2.8.0 with parameter eslint_disable
// @generated from protobuf file "ecs-snapshot.proto" (package "ecssnapshot", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message ecssnapshot.ECSState
 */
export interface ECSState {
  /**
   * @generated from protobuf field: uint32 component_id_idx = 1;
   */
  componentIdIdx: number;
  /**
   * @generated from protobuf field: uint32 entity_id_idx = 2;
   */
  entityIdIdx: number;
  /**
   * @generated from protobuf field: bytes value = 3;
   */
  value: Uint8Array;
}
/**
 * @generated from protobuf message ecssnapshot.ECSStateSnapshot
 */
export interface ECSStateSnapshot {
  /**
   * @generated from protobuf field: repeated ecssnapshot.ECSState state = 1;
   */
  state: ECSState[];
  /**
   * @generated from protobuf field: repeated string stateComponents = 2;
   */
  stateComponents: string[];
  /**
   * @generated from protobuf field: repeated string stateEntities = 3;
   */
  stateEntities: string[];
  /**
   * @generated from protobuf field: string stateHash = 4;
   */
  stateHash: string;
  /**
   * @generated from protobuf field: uint32 startBlockNumber = 5;
   */
  startBlockNumber: number;
  /**
   * @generated from protobuf field: uint32 endBlockNumber = 6;
   */
  endBlockNumber: number;
  /**
   * @generated from protobuf field: string worldAddress = 7;
   */
  worldAddress: string;
}
/**
 * @generated from protobuf message ecssnapshot.Worlds
 */
export interface Worlds {
  /**
   * @generated from protobuf field: repeated string worldAddress = 1;
   */
  worldAddress: string[];
}
/**
 * The request message for the latest ECS state.
 *
 * @generated from protobuf message ecssnapshot.ECSStateRequestLatest
 */
export interface ECSStateRequestLatest {
  /**
   * @generated from protobuf field: string worldAddress = 1;
   */
  worldAddress: string;
}
/**
 * The request message for the latest block based on latest ECS state.
 *
 * @generated from protobuf message ecssnapshot.ECSStateBlockRequestLatest
 */
export interface ECSStateBlockRequestLatest {
  /**
   * @generated from protobuf field: string worldAddress = 1;
   */
  worldAddress: string;
}
/**
 * The request message for the ECS state given a block number.
 *
 * @generated from protobuf message ecssnapshot.ECSStateRequestAtBlock
 */
export interface ECSStateRequestAtBlock {
  /**
   * @generated from protobuf field: uint64 blockNumber = 1;
   */
  blockNumber: bigint;
}
/**
 * The request message for all worlds.
 *
 * @generated from protobuf message ecssnapshot.WorldsRequest
 */
export interface WorldsRequest {}
/**
 * The response message containing the current state, hash of that state, and the block number of that state.
 *
 * @generated from protobuf message ecssnapshot.ECSStateReply
 */
export interface ECSStateReply {
  /**
   * @generated from protobuf field: repeated ecssnapshot.ECSState state = 1;
   */
  state: ECSState[];
  /**
   * @generated from protobuf field: repeated string stateComponents = 2;
   */
  stateComponents: string[];
  /**
   * @generated from protobuf field: repeated string stateEntities = 3;
   */
  stateEntities: string[];
  /**
   * @generated from protobuf field: string stateHash = 4;
   */
  stateHash: string;
  /**
   * @generated from protobuf field: uint32 blockNumber = 5;
   */
  blockNumber: number;
}
/**
 * @generated from protobuf message ecssnapshot.ECSStateBlockReply
 */
export interface ECSStateBlockReply {
  /**
   * @generated from protobuf field: uint32 blockNumber = 1;
   */
  blockNumber: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class ECSState$Type extends MessageType<ECSState> {
  constructor() {
    super("ecssnapshot.ECSState", [
      { no: 1, name: "component_id_idx", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
      { no: 2, name: "entity_id_idx", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
      { no: 3, name: "value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
    ]);
  }
  create(value?: PartialMessage<ECSState>): ECSState {
    const message = { componentIdIdx: 0, entityIdIdx: 0, value: new Uint8Array(0) };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<ECSState>(this, message, value);
    return message;
  }
  internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ECSState): ECSState {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* uint32 component_id_idx */ 1:
          message.componentIdIdx = reader.uint32();
          break;
        case /* uint32 entity_id_idx */ 2:
          message.entityIdIdx = reader.uint32();
          break;
        case /* bytes value */ 3:
          message.value = reader.bytes();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message: ECSState, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* uint32 component_id_idx = 1; */
    if (message.componentIdIdx !== 0) writer.tag(1, WireType.Varint).uint32(message.componentIdIdx);
    /* uint32 entity_id_idx = 2; */
    if (message.entityIdIdx !== 0) writer.tag(2, WireType.Varint).uint32(message.entityIdIdx);
    /* bytes value = 3; */
    if (message.value.length) writer.tag(3, WireType.LengthDelimited).bytes(message.value);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message ecssnapshot.ECSState
 */
export const ECSState = new ECSState$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ECSStateSnapshot$Type extends MessageType<ECSStateSnapshot> {
  constructor() {
    super("ecssnapshot.ECSStateSnapshot", [
      { no: 1, name: "state", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ECSState },
      { no: 2, name: "stateComponents", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "stateEntities", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
      { no: 4, name: "stateHash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 5, name: "startBlockNumber", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
      { no: 6, name: "endBlockNumber", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
      { no: 7, name: "worldAddress", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
  create(value?: PartialMessage<ECSStateSnapshot>): ECSStateSnapshot {
    const message = {
      state: [],
      stateComponents: [],
      stateEntities: [],
      stateHash: "",
      startBlockNumber: 0,
      endBlockNumber: 0,
      worldAddress: "",
    };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<ECSStateSnapshot>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ECSStateSnapshot
  ): ECSStateSnapshot {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* repeated ecssnapshot.ECSState state */ 1:
          message.state.push(ECSState.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* repeated string stateComponents */ 2:
          message.stateComponents.push(reader.string());
          break;
        case /* repeated string stateEntities */ 3:
          message.stateEntities.push(reader.string());
          break;
        case /* string stateHash */ 4:
          message.stateHash = reader.string();
          break;
        case /* uint32 startBlockNumber */ 5:
          message.startBlockNumber = reader.uint32();
          break;
        case /* uint32 endBlockNumber */ 6:
          message.endBlockNumber = reader.uint32();
          break;
        case /* string worldAddress */ 7:
          message.worldAddress = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message: ECSStateSnapshot, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* repeated ecssnapshot.ECSState state = 1; */
    for (let i = 0; i < message.state.length; i++)
      ECSState.internalBinaryWrite(message.state[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
    /* repeated string stateComponents = 2; */
    for (let i = 0; i < message.stateComponents.length; i++)
      writer.tag(2, WireType.LengthDelimited).string(message.stateComponents[i]);
    /* repeated string stateEntities = 3; */
    for (let i = 0; i < message.stateEntities.length; i++)
      writer.tag(3, WireType.LengthDelimited).string(message.stateEntities[i]);
    /* string stateHash = 4; */
    if (message.stateHash !== "") writer.tag(4, WireType.LengthDelimited).string(message.stateHash);
    /* uint32 startBlockNumber = 5; */
    if (message.startBlockNumber !== 0) writer.tag(5, WireType.Varint).uint32(message.startBlockNumber);
    /* uint32 endBlockNumber = 6; */
    if (message.endBlockNumber !== 0) writer.tag(6, WireType.Varint).uint32(message.endBlockNumber);
    /* string worldAddress = 7; */
    if (message.worldAddress !== "") writer.tag(7, WireType.LengthDelimited).string(message.worldAddress);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message ecssnapshot.ECSStateSnapshot
 */
export const ECSStateSnapshot = new ECSStateSnapshot$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Worlds$Type extends MessageType<Worlds> {
  constructor() {
    super("ecssnapshot.Worlds", [
      { no: 1, name: "worldAddress", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
    ]);
  }
  create(value?: PartialMessage<Worlds>): Worlds {
    const message = { worldAddress: [] };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<Worlds>(this, message, value);
    return message;
  }
  internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Worlds): Worlds {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* repeated string worldAddress */ 1:
          message.worldAddress.push(reader.string());
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message: Worlds, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* repeated string worldAddress = 1; */
    for (let i = 0; i < message.worldAddress.length; i++)
      writer.tag(1, WireType.LengthDelimited).string(message.worldAddress[i]);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message ecssnapshot.Worlds
 */
export const Worlds = new Worlds$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ECSStateRequestLatest$Type extends MessageType<ECSStateRequestLatest> {
  constructor() {
    super("ecssnapshot.ECSStateRequestLatest", [
      { no: 1, name: "worldAddress", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
  create(value?: PartialMessage<ECSStateRequestLatest>): ECSStateRequestLatest {
    const message = { worldAddress: "" };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<ECSStateRequestLatest>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ECSStateRequestLatest
  ): ECSStateRequestLatest {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string worldAddress */ 1:
          message.worldAddress = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: ECSStateRequestLatest,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string worldAddress = 1; */
    if (message.worldAddress !== "") writer.tag(1, WireType.LengthDelimited).string(message.worldAddress);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message ecssnapshot.ECSStateRequestLatest
 */
export const ECSStateRequestLatest = new ECSStateRequestLatest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ECSStateBlockRequestLatest$Type extends MessageType<ECSStateBlockRequestLatest> {
  constructor() {
    super("ecssnapshot.ECSStateBlockRequestLatest", [
      { no: 1, name: "worldAddress", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
    ]);
  }
  create(value?: PartialMessage<ECSStateBlockRequestLatest>): ECSStateBlockRequestLatest {
    const message = { worldAddress: "" };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<ECSStateBlockRequestLatest>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ECSStateBlockRequestLatest
  ): ECSStateBlockRequestLatest {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string worldAddress */ 1:
          message.worldAddress = reader.string();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: ECSStateBlockRequestLatest,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string worldAddress = 1; */
    if (message.worldAddress !== "") writer.tag(1, WireType.LengthDelimited).string(message.worldAddress);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message ecssnapshot.ECSStateBlockRequestLatest
 */
export const ECSStateBlockRequestLatest = new ECSStateBlockRequestLatest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ECSStateRequestAtBlock$Type extends MessageType<ECSStateRequestAtBlock> {
  constructor() {
    super("ecssnapshot.ECSStateRequestAtBlock", [
      { no: 1, name: "blockNumber", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
    ]);
  }
  create(value?: PartialMessage<ECSStateRequestAtBlock>): ECSStateRequestAtBlock {
    const message = { blockNumber: 0n };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<ECSStateRequestAtBlock>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ECSStateRequestAtBlock
  ): ECSStateRequestAtBlock {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* uint64 blockNumber */ 1:
          message.blockNumber = reader.uint64().toBigInt();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: ECSStateRequestAtBlock,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* uint64 blockNumber = 1; */
    if (message.blockNumber !== 0n) writer.tag(1, WireType.Varint).uint64(message.blockNumber);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message ecssnapshot.ECSStateRequestAtBlock
 */
export const ECSStateRequestAtBlock = new ECSStateRequestAtBlock$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WorldsRequest$Type extends MessageType<WorldsRequest> {
  constructor() {
    super("ecssnapshot.WorldsRequest", []);
  }
  create(value?: PartialMessage<WorldsRequest>): WorldsRequest {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<WorldsRequest>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: WorldsRequest
  ): WorldsRequest {
    return target ?? this.create();
  }
  internalBinaryWrite(message: WorldsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message ecssnapshot.WorldsRequest
 */
export const WorldsRequest = new WorldsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ECSStateReply$Type extends MessageType<ECSStateReply> {
  constructor() {
    super("ecssnapshot.ECSStateReply", [
      { no: 1, name: "state", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ECSState },
      { no: 2, name: "stateComponents", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: "stateEntities", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
      { no: 4, name: "stateHash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      { no: 5, name: "blockNumber", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
    ]);
  }
  create(value?: PartialMessage<ECSStateReply>): ECSStateReply {
    const message = { state: [], stateComponents: [], stateEntities: [], stateHash: "", blockNumber: 0 };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<ECSStateReply>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ECSStateReply
  ): ECSStateReply {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* repeated ecssnapshot.ECSState state */ 1:
          message.state.push(ECSState.internalBinaryRead(reader, reader.uint32(), options));
          break;
        case /* repeated string stateComponents */ 2:
          message.stateComponents.push(reader.string());
          break;
        case /* repeated string stateEntities */ 3:
          message.stateEntities.push(reader.string());
          break;
        case /* string stateHash */ 4:
          message.stateHash = reader.string();
          break;
        case /* uint32 blockNumber */ 5:
          message.blockNumber = reader.uint32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message: ECSStateReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* repeated ecssnapshot.ECSState state = 1; */
    for (let i = 0; i < message.state.length; i++)
      ECSState.internalBinaryWrite(message.state[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
    /* repeated string stateComponents = 2; */
    for (let i = 0; i < message.stateComponents.length; i++)
      writer.tag(2, WireType.LengthDelimited).string(message.stateComponents[i]);
    /* repeated string stateEntities = 3; */
    for (let i = 0; i < message.stateEntities.length; i++)
      writer.tag(3, WireType.LengthDelimited).string(message.stateEntities[i]);
    /* string stateHash = 4; */
    if (message.stateHash !== "") writer.tag(4, WireType.LengthDelimited).string(message.stateHash);
    /* uint32 blockNumber = 5; */
    if (message.blockNumber !== 0) writer.tag(5, WireType.Varint).uint32(message.blockNumber);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message ecssnapshot.ECSStateReply
 */
export const ECSStateReply = new ECSStateReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ECSStateBlockReply$Type extends MessageType<ECSStateBlockReply> {
  constructor() {
    super("ecssnapshot.ECSStateBlockReply", [
      { no: 1, name: "blockNumber", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
    ]);
  }
  create(value?: PartialMessage<ECSStateBlockReply>): ECSStateBlockReply {
    const message = { blockNumber: 0 };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
    if (value !== undefined) reflectionMergePartial<ECSStateBlockReply>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ECSStateBlockReply
  ): ECSStateBlockReply {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* uint32 blockNumber */ 1:
          message.blockNumber = reader.uint32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
          let d = reader.skip(wireType);
          if (u !== false) (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
      }
    }
    return message;
  }
  internalBinaryWrite(message: ECSStateBlockReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
    /* uint32 blockNumber = 1; */
    if (message.blockNumber !== 0) writer.tag(1, WireType.Varint).uint32(message.blockNumber);
    let u = options.writeUnknownFields;
    if (u !== false) (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message ecssnapshot.ECSStateBlockReply
 */
export const ECSStateBlockReply = new ECSStateBlockReply$Type();
/**
 * @generated ServiceType for protobuf service ecssnapshot.ECSStateSnapshotService
 */
export const ECSStateSnapshotService = new ServiceType("ecssnapshot.ECSStateSnapshotService", [
  { name: "GetStateLatest", options: {}, I: ECSStateRequestLatest, O: ECSStateReply },
  { name: "GetStateLatestStream", serverStreaming: true, options: {}, I: ECSStateRequestLatest, O: ECSStateReply },
  { name: "GetStateBlockLatest", options: {}, I: ECSStateBlockRequestLatest, O: ECSStateBlockReply },
  { name: "GetStateAtBlock", options: {}, I: ECSStateRequestAtBlock, O: ECSStateReply },
  { name: "GetWorlds", options: {}, I: WorldsRequest, O: Worlds },
]);