//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('../thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var Common_ttypes = require('./Common_types')
var Queue_ttypes = require('./Queue_types')


var ttypes = module.exports = {};
ttypes.ALERT_TYPE = {
  'SEND_REQUEST' : 0,
  'RECEIVE_REQUEST' : 1,
  'CHANGE_REQUEST' : 2,
  'DELETE_REQUEST' : 3,
  'SINGLE_SEND_REQUEST' : 4,
  'BATCH_SEND_REQUEST' : 5,
  'SHORT_RECEIVE_REQUEST' : 6,
  'LONG_RECEIVE_REQUEST' : 7,
  'QUEUE_MESSAGE_NUMBER' : 8
};
ttypes.MEASUREMENT = {
  'LATENCY' : 0,
  'LATENCY_P999' : 1,
  'COUNT' : 2
};
UserQuota = module.exports.UserQuota = function(args) {
  this.throughput = null;
  this.queueNumber = null;
  if (args) {
    if (args.throughput !== undefined) {
      this.throughput = args.throughput;
    }
    if (args.queueNumber !== undefined) {
      this.queueNumber = args.queueNumber;
    }
  }
};
UserQuota.prototype = {};
UserQuota.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.throughput = new Queue_ttypes.Throughput();
        this.throughput.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.queueNumber = input.readI64();
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

UserQuota.prototype.write = function(output) {
  output.writeStructBegin('UserQuota');
  if (this.throughput !== null && this.throughput !== undefined) {
    output.writeFieldBegin('throughput', Thrift.Type.STRUCT, 1);
    this.throughput.write(output);
    output.writeFieldEnd();
  }
  if (this.queueNumber !== null && this.queueNumber !== undefined) {
    output.writeFieldBegin('queueNumber', Thrift.Type.I64, 2);
    output.writeI64(this.queueNumber);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SetUserQuotaRequest = module.exports.SetUserQuotaRequest = function(args) {
  this.developerId = null;
  this.userQuota = null;
  if (args) {
    if (args.developerId !== undefined) {
      this.developerId = args.developerId;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field developerId is unset!');
    }
    if (args.userQuota !== undefined) {
      this.userQuota = args.userQuota;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field userQuota is unset!');
    }
  }
};
SetUserQuotaRequest.prototype = {};
SetUserQuotaRequest.prototype.read = function(input) {
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
        this.developerId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.userQuota = new ttypes.UserQuota();
        this.userQuota.read(input);
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

SetUserQuotaRequest.prototype.write = function(output) {
  output.writeStructBegin('SetUserQuotaRequest');
  if (this.developerId !== null && this.developerId !== undefined) {
    output.writeFieldBegin('developerId', Thrift.Type.STRING, 1);
    output.writeString(this.developerId);
    output.writeFieldEnd();
  }
  if (this.userQuota !== null && this.userQuota !== undefined) {
    output.writeFieldBegin('userQuota', Thrift.Type.STRUCT, 2);
    this.userQuota.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

GetUserQuotaRequest = module.exports.GetUserQuotaRequest = function(args) {
  this.developerId = null;
  if (args) {
    if (args.developerId !== undefined) {
      this.developerId = args.developerId;
    }
  }
};
GetUserQuotaRequest.prototype = {};
GetUserQuotaRequest.prototype.read = function(input) {
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
        this.developerId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

GetUserQuotaRequest.prototype.write = function(output) {
  output.writeStructBegin('GetUserQuotaRequest');
  if (this.developerId !== null && this.developerId !== undefined) {
    output.writeFieldBegin('developerId', Thrift.Type.STRING, 1);
    output.writeString(this.developerId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

GetUserQuotaResponse = module.exports.GetUserQuotaResponse = function(args) {
  this.developerId = null;
  this.userQuota = null;
  if (args) {
    if (args.developerId !== undefined) {
      this.developerId = args.developerId;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field developerId is unset!');
    }
    if (args.userQuota !== undefined) {
      this.userQuota = args.userQuota;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field userQuota is unset!');
    }
  }
};
GetUserQuotaResponse.prototype = {};
GetUserQuotaResponse.prototype.read = function(input) {
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
        this.developerId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.userQuota = new ttypes.UserQuota();
        this.userQuota.read(input);
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

GetUserQuotaResponse.prototype.write = function(output) {
  output.writeStructBegin('GetUserQuotaResponse');
  if (this.developerId !== null && this.developerId !== undefined) {
    output.writeFieldBegin('developerId', Thrift.Type.STRING, 1);
    output.writeString(this.developerId);
    output.writeFieldEnd();
  }
  if (this.userQuota !== null && this.userQuota !== undefined) {
    output.writeFieldBegin('userQuota', Thrift.Type.STRUCT, 2);
    this.userQuota.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

GetUserUsedQuotaRequest = module.exports.GetUserUsedQuotaRequest = function(args) {
  this.developerId = null;
  if (args) {
    if (args.developerId !== undefined) {
      this.developerId = args.developerId;
    }
  }
};
GetUserUsedQuotaRequest.prototype = {};
GetUserUsedQuotaRequest.prototype.read = function(input) {
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
        this.developerId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

GetUserUsedQuotaRequest.prototype.write = function(output) {
  output.writeStructBegin('GetUserUsedQuotaRequest');
  if (this.developerId !== null && this.developerId !== undefined) {
    output.writeFieldBegin('developerId', Thrift.Type.STRING, 1);
    output.writeString(this.developerId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SetUserInfoRequest = module.exports.SetUserInfoRequest = function(args) {
  this.developerId = null;
  this.userName = null;
  this.email = null;
  this.sms = null;
  if (args) {
    if (args.developerId !== undefined) {
      this.developerId = args.developerId;
    }
    if (args.userName !== undefined) {
      this.userName = args.userName;
    }
    if (args.email !== undefined) {
      this.email = args.email;
    }
    if (args.sms !== undefined) {
      this.sms = args.sms;
    }
  }
};
SetUserInfoRequest.prototype = {};
SetUserInfoRequest.prototype.read = function(input) {
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
        this.developerId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.userName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.sms = input.readString();
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

SetUserInfoRequest.prototype.write = function(output) {
  output.writeStructBegin('SetUserInfoRequest');
  if (this.developerId !== null && this.developerId !== undefined) {
    output.writeFieldBegin('developerId', Thrift.Type.STRING, 1);
    output.writeString(this.developerId);
    output.writeFieldEnd();
  }
  if (this.userName !== null && this.userName !== undefined) {
    output.writeFieldBegin('userName', Thrift.Type.STRING, 2);
    output.writeString(this.userName);
    output.writeFieldEnd();
  }
  if (this.email !== null && this.email !== undefined) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 3);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  if (this.sms !== null && this.sms !== undefined) {
    output.writeFieldBegin('sms', Thrift.Type.STRING, 4);
    output.writeString(this.sms);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

GetUserInfoRequest = module.exports.GetUserInfoRequest = function(args) {
  this.developerId = null;
  if (args) {
    if (args.developerId !== undefined) {
      this.developerId = args.developerId;
    }
  }
};
GetUserInfoRequest.prototype = {};
GetUserInfoRequest.prototype.read = function(input) {
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
        this.developerId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

GetUserInfoRequest.prototype.write = function(output) {
  output.writeStructBegin('GetUserInfoRequest');
  if (this.developerId !== null && this.developerId !== undefined) {
    output.writeFieldBegin('developerId', Thrift.Type.STRING, 1);
    output.writeString(this.developerId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

GetUserInfoResponse = module.exports.GetUserInfoResponse = function(args) {
  this.developerId = null;
  this.userName = null;
  this.email = null;
  this.sms = null;
  if (args) {
    if (args.developerId !== undefined) {
      this.developerId = args.developerId;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field developerId is unset!');
    }
    if (args.userName !== undefined) {
      this.userName = args.userName;
    }
    if (args.email !== undefined) {
      this.email = args.email;
    }
    if (args.sms !== undefined) {
      this.sms = args.sms;
    }
  }
};
GetUserInfoResponse.prototype = {};
GetUserInfoResponse.prototype.read = function(input) {
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
        this.developerId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.userName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.sms = input.readString();
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

GetUserInfoResponse.prototype.write = function(output) {
  output.writeStructBegin('GetUserInfoResponse');
  if (this.developerId !== null && this.developerId !== undefined) {
    output.writeFieldBegin('developerId', Thrift.Type.STRING, 1);
    output.writeString(this.developerId);
    output.writeFieldEnd();
  }
  if (this.userName !== null && this.userName !== undefined) {
    output.writeFieldBegin('userName', Thrift.Type.STRING, 2);
    output.writeString(this.userName);
    output.writeFieldEnd();
  }
  if (this.email !== null && this.email !== undefined) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 3);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  if (this.sms !== null && this.sms !== undefined) {
    output.writeFieldBegin('sms', Thrift.Type.STRING, 4);
    output.writeString(this.sms);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AlertPolicy = module.exports.AlertPolicy = function(args) {
  this.type = null;
  this.measurement = null;
  this.threshold = null;
  if (args) {
    if (args.type !== undefined) {
      this.type = args.type;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field type is unset!');
    }
    if (args.measurement !== undefined) {
      this.measurement = args.measurement;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field measurement is unset!');
    }
    if (args.threshold !== undefined) {
      this.threshold = args.threshold;
    }
  }
};
AlertPolicy.prototype = {};
AlertPolicy.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.measurement = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.DOUBLE) {
        this.threshold = input.readDouble();
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

AlertPolicy.prototype.write = function(output) {
  output.writeStructBegin('AlertPolicy');
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 1);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.measurement !== null && this.measurement !== undefined) {
    output.writeFieldBegin('measurement', Thrift.Type.I32, 2);
    output.writeI32(this.measurement);
    output.writeFieldEnd();
  }
  if (this.threshold !== null && this.threshold !== undefined) {
    output.writeFieldBegin('threshold', Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.threshold);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AddQueueAlertPolicyRequest = module.exports.AddQueueAlertPolicyRequest = function(args) {
  this.queueName = null;
  this.alertPolicy = null;
  if (args) {
    if (args.queueName !== undefined) {
      this.queueName = args.queueName;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field queueName is unset!');
    }
    if (args.alertPolicy !== undefined) {
      this.alertPolicy = args.alertPolicy;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field alertPolicy is unset!');
    }
  }
};
AddQueueAlertPolicyRequest.prototype = {};
AddQueueAlertPolicyRequest.prototype.read = function(input) {
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
        this.queueName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.alertPolicy = new ttypes.AlertPolicy();
        this.alertPolicy.read(input);
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

AddQueueAlertPolicyRequest.prototype.write = function(output) {
  output.writeStructBegin('AddQueueAlertPolicyRequest');
  if (this.queueName !== null && this.queueName !== undefined) {
    output.writeFieldBegin('queueName', Thrift.Type.STRING, 1);
    output.writeString(this.queueName);
    output.writeFieldEnd();
  }
  if (this.alertPolicy !== null && this.alertPolicy !== undefined) {
    output.writeFieldBegin('alertPolicy', Thrift.Type.STRUCT, 2);
    this.alertPolicy.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DeleteQueueAlertPolicyRequest = module.exports.DeleteQueueAlertPolicyRequest = function(args) {
  this.queueName = null;
  this.alertPolicy = null;
  if (args) {
    if (args.queueName !== undefined) {
      this.queueName = args.queueName;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field queueName is unset!');
    }
    if (args.alertPolicy !== undefined) {
      this.alertPolicy = args.alertPolicy;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field alertPolicy is unset!');
    }
  }
};
DeleteQueueAlertPolicyRequest.prototype = {};
DeleteQueueAlertPolicyRequest.prototype.read = function(input) {
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
        this.queueName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.alertPolicy = new ttypes.AlertPolicy();
        this.alertPolicy.read(input);
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

DeleteQueueAlertPolicyRequest.prototype.write = function(output) {
  output.writeStructBegin('DeleteQueueAlertPolicyRequest');
  if (this.queueName !== null && this.queueName !== undefined) {
    output.writeFieldBegin('queueName', Thrift.Type.STRING, 1);
    output.writeString(this.queueName);
    output.writeFieldEnd();
  }
  if (this.alertPolicy !== null && this.alertPolicy !== undefined) {
    output.writeFieldBegin('alertPolicy', Thrift.Type.STRUCT, 2);
    this.alertPolicy.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ListQueueAlertPoliciesRequest = module.exports.ListQueueAlertPoliciesRequest = function(args) {
  this.queueName = null;
  if (args) {
    if (args.queueName !== undefined) {
      this.queueName = args.queueName;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field queueName is unset!');
    }
  }
};
ListQueueAlertPoliciesRequest.prototype = {};
ListQueueAlertPoliciesRequest.prototype.read = function(input) {
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
        this.queueName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ListQueueAlertPoliciesRequest.prototype.write = function(output) {
  output.writeStructBegin('ListQueueAlertPoliciesRequest');
  if (this.queueName !== null && this.queueName !== undefined) {
    output.writeFieldBegin('queueName', Thrift.Type.STRING, 1);
    output.writeString(this.queueName);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ListQueueAlertPoliciesResponse = module.exports.ListQueueAlertPoliciesResponse = function(args) {
  this.queueName = null;
  this.alertPolicies = null;
  if (args) {
    if (args.queueName !== undefined) {
      this.queueName = args.queueName;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field queueName is unset!');
    }
    if (args.alertPolicies !== undefined) {
      this.alertPolicies = args.alertPolicies;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field alertPolicies is unset!');
    }
  }
};
ListQueueAlertPoliciesResponse.prototype = {};
ListQueueAlertPoliciesResponse.prototype.read = function(input) {
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
        this.queueName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.alertPolicies = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.AlertPolicy();
          elem6.read(input);
          this.alertPolicies.push(elem6);
        }
        input.readListEnd();
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

ListQueueAlertPoliciesResponse.prototype.write = function(output) {
  output.writeStructBegin('ListQueueAlertPoliciesResponse');
  if (this.queueName !== null && this.queueName !== undefined) {
    output.writeFieldBegin('queueName', Thrift.Type.STRING, 1);
    output.writeString(this.queueName);
    output.writeFieldEnd();
  }
  if (this.alertPolicies !== null && this.alertPolicies !== undefined) {
    output.writeFieldBegin('alertPolicies', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.alertPolicies.length);
    for (var iter7 in this.alertPolicies)
    {
      if (this.alertPolicies.hasOwnProperty(iter7))
      {
        iter7 = this.alertPolicies[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

SetQueueDailyStatisticsStateRequest = module.exports.SetQueueDailyStatisticsStateRequest = function(args) {
  this.queueName = null;
  this.enabled = null;
  if (args) {
    if (args.queueName !== undefined) {
      this.queueName = args.queueName;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field queueName is unset!');
    }
    if (args.enabled !== undefined) {
      this.enabled = args.enabled;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field enabled is unset!');
    }
  }
};
SetQueueDailyStatisticsStateRequest.prototype = {};
SetQueueDailyStatisticsStateRequest.prototype.read = function(input) {
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
        this.queueName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.enabled = input.readBool();
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

SetQueueDailyStatisticsStateRequest.prototype.write = function(output) {
  output.writeStructBegin('SetQueueDailyStatisticsStateRequest');
  if (this.queueName !== null && this.queueName !== undefined) {
    output.writeFieldBegin('queueName', Thrift.Type.STRING, 1);
    output.writeString(this.queueName);
    output.writeFieldEnd();
  }
  if (this.enabled !== null && this.enabled !== undefined) {
    output.writeFieldBegin('enabled', Thrift.Type.BOOL, 2);
    output.writeBool(this.enabled);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

GetQueueDailyStatisticsStateRequest = module.exports.GetQueueDailyStatisticsStateRequest = function(args) {
  this.queueName = null;
  if (args) {
    if (args.queueName !== undefined) {
      this.queueName = args.queueName;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field queueName is unset!');
    }
  }
};
GetQueueDailyStatisticsStateRequest.prototype = {};
GetQueueDailyStatisticsStateRequest.prototype.read = function(input) {
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
        this.queueName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

GetQueueDailyStatisticsStateRequest.prototype.write = function(output) {
  output.writeStructBegin('GetQueueDailyStatisticsStateRequest');
  if (this.queueName !== null && this.queueName !== undefined) {
    output.writeFieldBegin('queueName', Thrift.Type.STRING, 1);
    output.writeString(this.queueName);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

GetQueueDailyStatisticsStateResponse = module.exports.GetQueueDailyStatisticsStateResponse = function(args) {
  this.queueName = null;
  this.enabled = null;
  if (args) {
    if (args.queueName !== undefined) {
      this.queueName = args.queueName;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field queueName is unset!');
    }
    if (args.enabled !== undefined) {
      this.enabled = args.enabled;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field enabled is unset!');
    }
  }
};
GetQueueDailyStatisticsStateResponse.prototype = {};
GetQueueDailyStatisticsStateResponse.prototype.read = function(input) {
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
        this.queueName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.enabled = input.readBool();
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

GetQueueDailyStatisticsStateResponse.prototype.write = function(output) {
  output.writeStructBegin('GetQueueDailyStatisticsStateResponse');
  if (this.queueName !== null && this.queueName !== undefined) {
    output.writeFieldBegin('queueName', Thrift.Type.STRING, 1);
    output.writeString(this.queueName);
    output.writeFieldEnd();
  }
  if (this.enabled !== null && this.enabled !== undefined) {
    output.writeFieldBegin('enabled', Thrift.Type.BOOL, 2);
    output.writeBool(this.enabled);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
