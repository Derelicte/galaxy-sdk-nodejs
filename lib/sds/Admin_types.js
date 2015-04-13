//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('../thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var Errors_ttypes = require('./Errors_types')
var Common_ttypes = require('./Common_types')
var Authentication_ttypes = require('./Authentication_types')
var Table_ttypes = require('./Table_types')


var ttypes = module.exports = {};
ttypes.MetricKey = {
  '0' : 'METER_METRIC_MIN',
  'METER_METRIC_MIN' : 0,
  '1' : 'READ_ALLOWED',
  'READ_ALLOWED' : 1,
  '2' : 'READ_THROTTLED',
  'READ_THROTTLED' : 2,
  '3' : 'WRITE_ALLOWED',
  'WRITE_ALLOWED' : 3,
  '4' : 'WRITE_THROTTLED',
  'WRITE_THROTTLED' : 4,
  '5' : 'ACTION_SUCCESS',
  'ACTION_SUCCESS' : 5,
  '6' : 'ACTION_CLIENT_ERROR',
  'ACTION_CLIENT_ERROR' : 6,
  '7' : 'ACTION_SYSTEM_ERROR',
  'ACTION_SYSTEM_ERROR' : 7,
  '49' : 'METER_METRIC_MAX',
  'METER_METRIC_MAX' : 49,
  '50' : 'HISTOGRAM_METRIC_MIN',
  'HISTOGRAM_METRIC_MIN' : 50,
  '51' : 'CREATE_LATENCY',
  'CREATE_LATENCY' : 51,
  '52' : 'DROP_LATENCY',
  'DROP_LATENCY' : 52,
  '53' : 'DESCRIBE_LATENCY',
  'DESCRIBE_LATENCY' : 53,
  '54' : 'ALTER_LATENCY',
  'ALTER_LATENCY' : 54,
  '55' : 'ENABLE_LATENCY',
  'ENABLE_LATENCY' : 55,
  '56' : 'DISABLE_LATENCY',
  'DISABLE_LATENCY' : 56,
  '57' : 'METRICQUERY_LATENCY',
  'METRICQUERY_LATENCY' : 57,
  '58' : 'GET_LATENCY',
  'GET_LATENCY' : 58,
  '59' : 'PUT_LATENCY',
  'PUT_LATENCY' : 59,
  '60' : 'INCREMENT_LATENCY',
  'INCREMENT_LATENCY' : 60,
  '61' : 'DELETE_LATENCY',
  'DELETE_LATENCY' : 61,
  '62' : 'SCAN_LATENCY',
  'SCAN_LATENCY' : 62,
  '63' : 'BATCH_LATENCY',
  'BATCH_LATENCY' : 63,
  '100' : 'HISTOGRAM_METRIC_MAX',
  'HISTOGRAM_METRIC_MAX' : 100
};
ttypes.MetricType = {
  '1' : 'COUNT',
  'COUNT' : 1,
  '2' : 'M1_RATE',
  'M1_RATE' : 2,
  '3' : 'M5_RATE',
  'M5_RATE' : 3,
  '4' : 'M15_RATE',
  'M15_RATE' : 4,
  '5' : 'MEAN',
  'MEAN' : 5,
  '6' : 'STDDEV',
  'STDDEV' : 6,
  '7' : 'P50',
  'P50' : 7,
  '8' : 'P75',
  'P75' : 8,
  '9' : 'P95',
  'P95' : 9,
  '10' : 'P98',
  'P98' : 10,
  '11' : 'P99',
  'P99' : 11
};
ttypes.TimeSpanUnit = {
  '1' : 'SECONDS',
  'SECONDS' : 1,
  '2' : 'MINUTES',
  'MINUTES' : 2,
  '3' : 'HOURS',
  'HOURS' : 3
};
AppInfo = module.exports.AppInfo = function(args) {
  this.appId = null;
  this.developerId = null;
  this.tableMappings = null;
  this.oauthAppMapping = null;
  this.appName = null;
  if (args) {
    if (args.appId !== undefined) {
      this.appId = args.appId;
    }
    if (args.developerId !== undefined) {
      this.developerId = args.developerId;
    }
    if (args.tableMappings !== undefined) {
      this.tableMappings = args.tableMappings;
    }
    if (args.oauthAppMapping !== undefined) {
      this.oauthAppMapping = args.oauthAppMapping;
    }
    if (args.appName !== undefined) {
      this.appName = args.appName;
    }
  }
};
AppInfo.prototype = {};
AppInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.appId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.developerId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.tableMappings = {};
        var _ktype1 = 0;
        var _vtype2 = 0;
        _rtmp34 = input.readMapBegin();
        _ktype1 = _rtmp34.ktype;
        _vtype2 = _rtmp34.vtype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var key6 = null;
          var val7 = null;
          key6 = input.readString();
          val7 = input.readString();
          this.tableMappings[key6] = val7;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size8 = 0;
        var _rtmp312;
        this.oauthAppMapping = {};
        var _ktype9 = 0;
        var _vtype10 = 0;
        _rtmp312 = input.readMapBegin();
        _ktype9 = _rtmp312.ktype;
        _vtype10 = _rtmp312.vtype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var key14 = null;
          var val15 = null;
          key14 = input.readString();
          val15 = input.readString();
          this.oauthAppMapping[key14] = val15;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.appName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AppInfo.prototype.write = function(output) {
  output.writeStructBegin('AppInfo');
  if (this.appId !== null && this.appId !== undefined) {
    output.writeFieldBegin('appId', Thrift.Type.STRING, 1);
    output.writeString(this.appId);
    output.writeFieldEnd();
  }
  if (this.developerId !== null && this.developerId !== undefined) {
    output.writeFieldBegin('developerId', Thrift.Type.STRING, 2);
    output.writeString(this.developerId);
    output.writeFieldEnd();
  }
  if (this.tableMappings !== null && this.tableMappings !== undefined) {
    output.writeFieldBegin('tableMappings', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.tableMappings));
    for (var kiter16 in this.tableMappings)
    {
      if (this.tableMappings.hasOwnProperty(kiter16))
      {
        var viter17 = this.tableMappings[kiter16];
        output.writeString(kiter16);
        output.writeString(viter17);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.oauthAppMapping !== null && this.oauthAppMapping !== undefined) {
    output.writeFieldBegin('oauthAppMapping', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.oauthAppMapping));
    for (var kiter18 in this.oauthAppMapping)
    {
      if (this.oauthAppMapping.hasOwnProperty(kiter18))
      {
        var viter19 = this.oauthAppMapping[kiter18];
        output.writeString(kiter18);
        output.writeString(viter19);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.appName !== null && this.appName !== undefined) {
    output.writeFieldBegin('appName', Thrift.Type.STRING, 5);
    output.writeString(this.appName);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MetricQueryRequest = module.exports.MetricQueryRequest = function(args) {
  this.tableName = null;
  this.startTime = null;
  this.stopTime = null;
  this.metricKey = null;
  this.metricType = null;
  this.downsampleInterval = null;
  this.downsampleTimeUnit = null;
  if (args) {
    if (args.tableName !== undefined) {
      this.tableName = args.tableName;
    }
    if (args.startTime !== undefined) {
      this.startTime = args.startTime;
    }
    if (args.stopTime !== undefined) {
      this.stopTime = args.stopTime;
    }
    if (args.metricKey !== undefined) {
      this.metricKey = args.metricKey;
    }
    if (args.metricType !== undefined) {
      this.metricType = args.metricType;
    }
    if (args.downsampleInterval !== undefined) {
      this.downsampleInterval = args.downsampleInterval;
    }
    if (args.downsampleTimeUnit !== undefined) {
      this.downsampleTimeUnit = args.downsampleTimeUnit;
    }
  }
};
MetricQueryRequest.prototype = {};
MetricQueryRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.tableName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.startTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.stopTime = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.metricKey = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.metricType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.downsampleInterval = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.downsampleTimeUnit = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

MetricQueryRequest.prototype.write = function(output) {
  output.writeStructBegin('MetricQueryRequest');
  if (this.tableName !== null && this.tableName !== undefined) {
    output.writeFieldBegin('tableName', Thrift.Type.STRING, 1);
    output.writeString(this.tableName);
    output.writeFieldEnd();
  }
  if (this.startTime !== null && this.startTime !== undefined) {
    output.writeFieldBegin('startTime', Thrift.Type.I64, 2);
    output.writeI64(this.startTime);
    output.writeFieldEnd();
  }
  if (this.stopTime !== null && this.stopTime !== undefined) {
    output.writeFieldBegin('stopTime', Thrift.Type.I64, 3);
    output.writeI64(this.stopTime);
    output.writeFieldEnd();
  }
  if (this.metricKey !== null && this.metricKey !== undefined) {
    output.writeFieldBegin('metricKey', Thrift.Type.I32, 4);
    output.writeI32(this.metricKey);
    output.writeFieldEnd();
  }
  if (this.metricType !== null && this.metricType !== undefined) {
    output.writeFieldBegin('metricType', Thrift.Type.I32, 5);
    output.writeI32(this.metricType);
    output.writeFieldEnd();
  }
  if (this.downsampleInterval !== null && this.downsampleInterval !== undefined) {
    output.writeFieldBegin('downsampleInterval', Thrift.Type.I32, 6);
    output.writeI32(this.downsampleInterval);
    output.writeFieldEnd();
  }
  if (this.downsampleTimeUnit !== null && this.downsampleTimeUnit !== undefined) {
    output.writeFieldBegin('downsampleTimeUnit', Thrift.Type.I32, 7);
    output.writeI32(this.downsampleTimeUnit);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TimeSeriesData = module.exports.TimeSeriesData = function(args) {
  this.tableName = null;
  this.metricKey = null;
  this.metricType = null;
  this.data = null;
  if (args) {
    if (args.tableName !== undefined) {
      this.tableName = args.tableName;
    }
    if (args.metricKey !== undefined) {
      this.metricKey = args.metricKey;
    }
    if (args.metricType !== undefined) {
      this.metricType = args.metricType;
    }
    if (args.data !== undefined) {
      this.data = args.data;
    }
  }
};
TimeSeriesData.prototype = {};
TimeSeriesData.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.tableName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.metricKey = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.metricType = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size20 = 0;
        var _rtmp324;
        this.data = {};
        var _ktype21 = 0;
        var _vtype22 = 0;
        _rtmp324 = input.readMapBegin();
        _ktype21 = _rtmp324.ktype;
        _vtype22 = _rtmp324.vtype;
        _size20 = _rtmp324.size;
        for (var _i25 = 0; _i25 < _size20; ++_i25)
        {
          var key26 = null;
          var val27 = null;
          key26 = input.readI64();
          val27 = input.readDouble();
          this.data[key26] = val27;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TimeSeriesData.prototype.write = function(output) {
  output.writeStructBegin('TimeSeriesData');
  if (this.tableName !== null && this.tableName !== undefined) {
    output.writeFieldBegin('tableName', Thrift.Type.STRING, 1);
    output.writeString(this.tableName);
    output.writeFieldEnd();
  }
  if (this.metricKey !== null && this.metricKey !== undefined) {
    output.writeFieldBegin('metricKey', Thrift.Type.I32, 2);
    output.writeI32(this.metricKey);
    output.writeFieldEnd();
  }
  if (this.metricType !== null && this.metricType !== undefined) {
    output.writeFieldBegin('metricType', Thrift.Type.I32, 3);
    output.writeI32(this.metricType);
    output.writeFieldEnd();
  }
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.I64, Thrift.Type.DOUBLE, Thrift.objectLength(this.data));
    for (var kiter28 in this.data)
    {
      if (this.data.hasOwnProperty(kiter28))
      {
        var viter29 = this.data[kiter28];
        output.writeI64(kiter28);
        output.writeDouble(viter29);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
