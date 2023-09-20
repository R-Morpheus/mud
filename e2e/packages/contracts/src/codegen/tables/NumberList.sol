// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/* Autogenerated file. Do not edit manually. */

// Import schema type
import { SchemaType } from "@latticexyz/schema-type/src/solidity/SchemaType.sol";

// Import store internals
import { IStore } from "@latticexyz/store/src/IStore.sol";
import { StoreSwitch } from "@latticexyz/store/src/StoreSwitch.sol";
import { StoreCore } from "@latticexyz/store/src/StoreCore.sol";
import { Bytes } from "@latticexyz/store/src/Bytes.sol";
import { Memory } from "@latticexyz/store/src/Memory.sol";
import { SliceLib } from "@latticexyz/store/src/Slice.sol";
import { EncodeArray } from "@latticexyz/store/src/tightcoder/EncodeArray.sol";
import { FieldLayout, FieldLayoutLib } from "@latticexyz/store/src/FieldLayout.sol";
import { Schema, SchemaLib } from "@latticexyz/store/src/Schema.sol";
import { PackedCounter, PackedCounterLib } from "@latticexyz/store/src/PackedCounter.sol";

bytes32 constant _tableId = bytes32(abi.encodePacked(bytes16(""), bytes16("NumberList")));
bytes32 constant NumberListTableId = _tableId;

FieldLayout constant _fieldLayout = FieldLayout.wrap(
  0x0000000100000000000000000000000000000000000000000000000000000000
);

library NumberList {
  /** Get the table values' field layout */
  function getFieldLayout() internal pure returns (FieldLayout) {
    return _fieldLayout;
  }

  /** Get the table's key schema */
  function getKeySchema() internal pure returns (Schema) {
    SchemaType[] memory _keySchema = new SchemaType[](0);

    return SchemaLib.encode(_keySchema);
  }

  /** Get the table's value schema */
  function getValueSchema() internal pure returns (Schema) {
    SchemaType[] memory _valueSchema = new SchemaType[](1);
    _valueSchema[0] = SchemaType.UINT32_ARRAY;

    return SchemaLib.encode(_valueSchema);
  }

  /** Get the table's key names */
  function getKeyNames() internal pure returns (string[] memory keyNames) {
    keyNames = new string[](0);
  }

  /** Get the table's field names */
  function getFieldNames() internal pure returns (string[] memory fieldNames) {
    fieldNames = new string[](1);
    fieldNames[0] = "value";
  }

  /** Register the table with its config */
  function register() internal {
    StoreSwitch.registerTable(_tableId, _fieldLayout, getKeySchema(), getValueSchema(), getKeyNames(), getFieldNames());
  }

  /** Register the table with its config */
  function _register() internal {
    StoreCore.registerTable(_tableId, _fieldLayout, getKeySchema(), getValueSchema(), getKeyNames(), getFieldNames());
  }

  /** Register the table with its config (using the specified store) */
  function register(IStore _store) internal {
    _store.registerTable(_tableId, _fieldLayout, getKeySchema(), getValueSchema(), getKeyNames(), getFieldNames());
  }

  /** Get value */
  function getValue() internal view returns (uint32[] memory value) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    bytes memory _blob = StoreSwitch.getDynamicField(_tableId, _keyTuple, 0);
    return (SliceLib.getSubslice(_blob, 0, _blob.length).decodeArray_uint32());
  }

  /** Get value */
  function _getValue() internal view returns (uint32[] memory value) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    bytes memory _blob = StoreCore.getDynamicField(_tableId, _keyTuple, 0);
    return (SliceLib.getSubslice(_blob, 0, _blob.length).decodeArray_uint32());
  }

  /** Get value (using the specified store) */
  function getValue(IStore _store) internal view returns (uint32[] memory value) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    bytes memory _blob = _store.getDynamicField(_tableId, _keyTuple, 0);
    return (SliceLib.getSubslice(_blob, 0, _blob.length).decodeArray_uint32());
  }

  /** Get value */
  function get() internal view returns (uint32[] memory value) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    bytes memory _blob = StoreSwitch.getDynamicField(_tableId, _keyTuple, 0);
    return (SliceLib.getSubslice(_blob, 0, _blob.length).decodeArray_uint32());
  }

  /** Get value */
  function _get() internal view returns (uint32[] memory value) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    bytes memory _blob = StoreCore.getDynamicField(_tableId, _keyTuple, 0);
    return (SliceLib.getSubslice(_blob, 0, _blob.length).decodeArray_uint32());
  }

  /** Get value (using the specified store) */
  function get(IStore _store) internal view returns (uint32[] memory value) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    bytes memory _blob = _store.getDynamicField(_tableId, _keyTuple, 0);
    return (SliceLib.getSubslice(_blob, 0, _blob.length).decodeArray_uint32());
  }

  /** Set value */
  function setValue(uint32[] memory value) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreSwitch.setField(_tableId, _keyTuple, 0, EncodeArray.encode((value)), _fieldLayout);
  }

  /** Set value */
  function _setValue(uint32[] memory value) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreCore.setField(_tableId, _keyTuple, 0, EncodeArray.encode((value)), _fieldLayout);
  }

  /** Set value (using the specified store) */
  function setValue(IStore _store, uint32[] memory value) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    _store.setField(_tableId, _keyTuple, 0, EncodeArray.encode((value)), _fieldLayout);
  }

  /** Set value */
  function set(uint32[] memory value) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreSwitch.setField(_tableId, _keyTuple, 0, EncodeArray.encode((value)), _fieldLayout);
  }

  /** Set value */
  function _set(uint32[] memory value) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreCore.setField(_tableId, _keyTuple, 0, EncodeArray.encode((value)), _fieldLayout);
  }

  /** Set value (using the specified store) */
  function set(IStore _store, uint32[] memory value) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    _store.setField(_tableId, _keyTuple, 0, EncodeArray.encode((value)), _fieldLayout);
  }

  /** Get the length of value */
  function lengthValue() internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    uint256 _byteLength = StoreSwitch.getFieldLength(_tableId, _keyTuple, 0, _fieldLayout);
    unchecked {
      return _byteLength / 4;
    }
  }

  /** Get the length of value */
  function _lengthValue() internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    uint256 _byteLength = StoreCore.getFieldLength(_tableId, _keyTuple, 0, _fieldLayout);
    unchecked {
      return _byteLength / 4;
    }
  }

  /** Get the length of value (using the specified store) */
  function lengthValue(IStore _store) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    uint256 _byteLength = _store.getFieldLength(_tableId, _keyTuple, 0, _fieldLayout);
    unchecked {
      return _byteLength / 4;
    }
  }

  /** Get the length of value */
  function length() internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    uint256 _byteLength = StoreSwitch.getFieldLength(_tableId, _keyTuple, 0, _fieldLayout);
    unchecked {
      return _byteLength / 4;
    }
  }

  /** Get the length of value */
  function _length() internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    uint256 _byteLength = StoreCore.getFieldLength(_tableId, _keyTuple, 0, _fieldLayout);
    unchecked {
      return _byteLength / 4;
    }
  }

  /** Get the length of value (using the specified store) */
  function length(IStore _store) internal view returns (uint256) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    uint256 _byteLength = _store.getFieldLength(_tableId, _keyTuple, 0, _fieldLayout);
    unchecked {
      return _byteLength / 4;
    }
  }

  /**
   * Get an item of value
   * (unchecked, returns invalid data if index overflows)
   */
  function getItemValue(uint256 _index) internal view returns (uint32) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      bytes memory _blob = StoreSwitch.getFieldSlice(
        _tableId,
        _keyTuple,
        0,
        _fieldLayout,
        _index * 4,
        (_index + 1) * 4
      );
      return (uint32(bytes4(_blob)));
    }
  }

  /**
   * Get an item of value
   * (unchecked, returns invalid data if index overflows)
   */
  function _getItemValue(uint256 _index) internal view returns (uint32) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      bytes memory _blob = StoreCore.getFieldSlice(_tableId, _keyTuple, 0, _fieldLayout, _index * 4, (_index + 1) * 4);
      return (uint32(bytes4(_blob)));
    }
  }

  /**
   * Get an item of value (using the specified store)
   * (unchecked, returns invalid data if index overflows)
   */
  function getItemValue(IStore _store, uint256 _index) internal view returns (uint32) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      bytes memory _blob = _store.getFieldSlice(_tableId, _keyTuple, 0, _fieldLayout, _index * 4, (_index + 1) * 4);
      return (uint32(bytes4(_blob)));
    }
  }

  /**
   * Get an item of value
   * (unchecked, returns invalid data if index overflows)
   */
  function getItem(uint256 _index) internal view returns (uint32) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      bytes memory _blob = StoreSwitch.getFieldSlice(
        _tableId,
        _keyTuple,
        0,
        _fieldLayout,
        _index * 4,
        (_index + 1) * 4
      );
      return (uint32(bytes4(_blob)));
    }
  }

  /**
   * Get an item of value
   * (unchecked, returns invalid data if index overflows)
   */
  function _getItem(uint256 _index) internal view returns (uint32) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      bytes memory _blob = StoreCore.getFieldSlice(_tableId, _keyTuple, 0, _fieldLayout, _index * 4, (_index + 1) * 4);
      return (uint32(bytes4(_blob)));
    }
  }

  /**
   * Get an item of value (using the specified store)
   * (unchecked, returns invalid data if index overflows)
   */
  function getItem(IStore _store, uint256 _index) internal view returns (uint32) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      bytes memory _blob = _store.getFieldSlice(_tableId, _keyTuple, 0, _fieldLayout, _index * 4, (_index + 1) * 4);
      return (uint32(bytes4(_blob)));
    }
  }

  /** Push an element to value */
  function pushValue(uint32 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreSwitch.pushToField(_tableId, _keyTuple, 0, abi.encodePacked((_element)), _fieldLayout);
  }

  /** Push an element to value */
  function _pushValue(uint32 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreCore.pushToField(_tableId, _keyTuple, 0, abi.encodePacked((_element)), _fieldLayout);
  }

  /** Push an element to value (using the specified store) */
  function pushValue(IStore _store, uint32 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    _store.pushToField(_tableId, _keyTuple, 0, abi.encodePacked((_element)), _fieldLayout);
  }

  /** Push an element to value */
  function push(uint32 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreSwitch.pushToField(_tableId, _keyTuple, 0, abi.encodePacked((_element)), _fieldLayout);
  }

  /** Push an element to value */
  function _push(uint32 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreCore.pushToField(_tableId, _keyTuple, 0, abi.encodePacked((_element)), _fieldLayout);
  }

  /** Push an element to value (using the specified store) */
  function push(IStore _store, uint32 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    _store.pushToField(_tableId, _keyTuple, 0, abi.encodePacked((_element)), _fieldLayout);
  }

  /** Pop an element from value */
  function popValue() internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreSwitch.popFromField(_tableId, _keyTuple, 0, 4, _fieldLayout);
  }

  /** Pop an element from value */
  function _popValue() internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreCore.popFromField(_tableId, _keyTuple, 0, 4, _fieldLayout);
  }

  /** Pop an element from value (using the specified store) */
  function popValue(IStore _store) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    _store.popFromField(_tableId, _keyTuple, 0, 4, _fieldLayout);
  }

  /** Pop an element from value */
  function pop() internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreSwitch.popFromField(_tableId, _keyTuple, 0, 4, _fieldLayout);
  }

  /** Pop an element from value */
  function _pop() internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreCore.popFromField(_tableId, _keyTuple, 0, 4, _fieldLayout);
  }

  /** Pop an element from value (using the specified store) */
  function pop(IStore _store) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    _store.popFromField(_tableId, _keyTuple, 0, 4, _fieldLayout);
  }

  /**
   * Update an element of value at `_index`
   * (checked only to prevent modifying other tables; can corrupt own data if index overflows)
   */
  function updateValue(uint256 _index, uint32 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      StoreSwitch.updateInField(_tableId, _keyTuple, 0, _index * 4, abi.encodePacked((_element)), _fieldLayout);
    }
  }

  /**
   * Update an element of value at `_index`
   * (checked only to prevent modifying other tables; can corrupt own data if index overflows)
   */
  function _updateValue(uint256 _index, uint32 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      StoreCore.updateInField(_tableId, _keyTuple, 0, _index * 4, abi.encodePacked((_element)), _fieldLayout);
    }
  }

  /**
   * Update an element of value (using the specified store) at `_index`
   * (checked only to prevent modifying other tables; can corrupt own data if index overflows)
   */
  function updateValue(IStore _store, uint256 _index, uint32 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      _store.updateInField(_tableId, _keyTuple, 0, _index * 4, abi.encodePacked((_element)), _fieldLayout);
    }
  }

  /**
   * Update an element of value at `_index`
   * (checked only to prevent modifying other tables; can corrupt own data if index overflows)
   */
  function update(uint256 _index, uint32 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      StoreSwitch.updateInField(_tableId, _keyTuple, 0, _index * 4, abi.encodePacked((_element)), _fieldLayout);
    }
  }

  /**
   * Update an element of value at `_index`
   * (checked only to prevent modifying other tables; can corrupt own data if index overflows)
   */
  function _update(uint256 _index, uint32 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      StoreCore.updateInField(_tableId, _keyTuple, 0, _index * 4, abi.encodePacked((_element)), _fieldLayout);
    }
  }

  /**
   * Update an element of value (using the specified store) at `_index`
   * (checked only to prevent modifying other tables; can corrupt own data if index overflows)
   */
  function update(IStore _store, uint256 _index, uint32 _element) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    unchecked {
      _store.updateInField(_tableId, _keyTuple, 0, _index * 4, abi.encodePacked((_element)), _fieldLayout);
    }
  }

  /** Tightly pack dynamic data using this table's schema */
  function encodeLengths(uint32[] memory value) internal pure returns (PackedCounter _encodedLengths) {
    // Lengths are effectively checked during copy by 2**40 bytes exceeding gas limits
    unchecked {
      _encodedLengths = PackedCounterLib.pack(value.length * 4);
    }
  }

  /** Tightly pack dynamic data using this table's schema */
  function encodeDynamic(uint32[] memory value) internal pure returns (bytes memory) {
    return abi.encodePacked(EncodeArray.encode((value)));
  }

  /** Tightly pack full data using this table's field layout */
  function encode(uint32[] memory value) internal pure returns (bytes memory, PackedCounter, bytes memory) {
    bytes memory _staticData;
    PackedCounter _encodedLengths = encodeLengths(value);
    bytes memory _dynamicData = encodeDynamic(value);

    return (_staticData, _encodedLengths, _dynamicData);
  }

  /** Encode keys as a bytes32 array using this table's field layout */
  function encodeKeyTuple() internal pure returns (bytes32[] memory) {
    bytes32[] memory _keyTuple = new bytes32[](0);

    return _keyTuple;
  }

  /* Delete all data for given keys */
  function deleteRecord() internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreSwitch.deleteRecord(_tableId, _keyTuple, _fieldLayout);
  }

  /* Delete all data for given keys */
  function _deleteRecord() internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    StoreCore.deleteRecord(_tableId, _keyTuple, _fieldLayout);
  }

  /* Delete all data for given keys (using the specified store) */
  function deleteRecord(IStore _store) internal {
    bytes32[] memory _keyTuple = new bytes32[](0);

    _store.deleteRecord(_tableId, _keyTuple, _fieldLayout);
  }
}
