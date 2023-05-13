// code generated by pbf v3.2.1 and modified by hand
const exports = {};

// ExtendedSodaConfigMsg ========================================

var ExtendedSodaConfigMsg = (exports.ExtendedSodaConfigMsg = {});

ExtendedSodaConfigMsg.read = function (pbf, end) {
  return pbf.readFields(
    ExtendedSodaConfigMsg._readField,
    {
      channel_count: 0,
      sample_rate: 0,
      max_buffer_bytes: 0,
      simulate_realtime_testonly: false,
      config_file_location: "",
      api_key: "",
      language_pack_directory: "",
      recognition_mode: { value: 1, options: {} },
      reset_on_final_result: true,
      include_timing_metrics: true,
      enable_lang_id: false,
      enable_formatting: true,
      enable_speaker_change_detection: false,
      include_logging: false,
      multilang_config: null,
    },
    end
  );
};
ExtendedSodaConfigMsg._readField = function (tag, obj, pbf) {
  if (tag === 1) obj.channel_count = pbf.readVarint(true);
  else if (tag === 2) obj.sample_rate = pbf.readVarint(true);
  else if (tag === 4) obj.max_buffer_bytes = pbf.readVarint(true);
  else if (tag === 5) obj.simulate_realtime_testonly = pbf.readBoolean();
  else if (tag === 3) obj.config_file_location = pbf.readString();
  else if (tag === 6) obj.api_key = pbf.readString();
  else if (tag === 7) obj.language_pack_directory = pbf.readString();
  else if (tag === 8) obj.recognition_mode = pbf.readVarint();
  else if (tag === 9) obj.reset_on_final_result = pbf.readBoolean();
  else if (tag === 10) obj.include_timing_metrics = pbf.readBoolean();
  else if (tag === 11) obj.enable_lang_id = pbf.readBoolean();
  else if (tag === 12) obj.enable_formatting = pbf.readBoolean();
  else if (tag === 13) obj.enable_speaker_change_detection = pbf.readBoolean();
  else if (tag === 14) obj.include_logging = pbf.readBoolean();
  else if (tag === 15)
    obj.multilang_config = MultilangConfig.read(
      pbf,
      pbf.readVarint() + pbf.pos
    );
};
ExtendedSodaConfigMsg.write = function (obj, pbf) {
  if (obj.channel_count) pbf.writeVarintField(1, obj.channel_count);
  if (obj.sample_rate) pbf.writeVarintField(2, obj.sample_rate);
  if (obj.max_buffer_bytes) pbf.writeVarintField(4, obj.max_buffer_bytes);
  if (obj.simulate_realtime_testonly)
    pbf.writeBooleanField(5, obj.simulate_realtime_testonly);
  if (obj.config_file_location)
    pbf.writeStringField(3, obj.config_file_location);
  if (obj.api_key) pbf.writeStringField(6, obj.api_key);
  if (obj.language_pack_directory)
    pbf.writeStringField(7, obj.language_pack_directory);
  if (
    obj.recognition_mode != undefined &&
    obj.recognition_mode !== { value: 1, options: {} }
  )
    pbf.writeVarintField(8, obj.recognition_mode);
  if (
    obj.reset_on_final_result != undefined &&
    obj.reset_on_final_result !== true
  )
    pbf.writeBooleanField(9, obj.reset_on_final_result);
  if (
    obj.include_timing_metrics != undefined &&
    obj.include_timing_metrics !== true
  )
    pbf.writeBooleanField(10, obj.include_timing_metrics);
  if (obj.enable_lang_id) pbf.writeBooleanField(11, obj.enable_lang_id);
  if (obj.enable_formatting != undefined && obj.enable_formatting !== true)
    pbf.writeBooleanField(12, obj.enable_formatting);
  if (obj.enable_speaker_change_detection)
    pbf.writeBooleanField(13, obj.enable_speaker_change_detection);
  if (obj.include_logging) pbf.writeBooleanField(14, obj.include_logging);
  if (obj.multilang_config)
    pbf.writeMessage(15, MultilangConfig.write, obj.multilang_config);
};

ExtendedSodaConfigMsg.RecognitionMode = {
  UNKNOWN: {
    value: 0,
    options: {},
  },
  IME: {
    value: 1,
    options: {},
  },
  CAPTION: {
    value: 2,
    options: {},
  },
};

// MultilangConfig ========================================

var MultilangConfig = (exports.MultilangConfig = {});

MultilangConfig.read = function (pbf, end) {
  return pbf.readFields(
    MultilangConfig._readField,
    {
      multilang_language_pack_directory: {},
      rewind_when_switching_language: false,
    },
    end
  );
};
MultilangConfig._readField = function (tag, obj, pbf) {
  if (tag === 1) {
    var entry = MultilangConfig._FieldEntry1.read(
      pbf,
      pbf.readVarint() + pbf.pos
    );
    obj.multilang_language_pack_directory[entry.key] = entry.value;
  } else if (tag === 2) obj.rewind_when_switching_language = pbf.readBoolean();
};
MultilangConfig.write = function (obj, pbf) {
  if (obj.multilang_language_pack_directory)
    for (var i in obj.multilang_language_pack_directory)
      if (
        Object.prototype.hasOwnProperty.call(
          obj.multilang_language_pack_directory,
          i
        )
      )
        pbf.writeMessage(1, MultilangConfig._FieldEntry1.write, {
          key: i,
          value: obj.multilang_language_pack_directory[i],
        });
  if (obj.rewind_when_switching_language)
    pbf.writeBooleanField(2, obj.rewind_when_switching_language);
};

// MultilangConfig._FieldEntry1 ========================================

MultilangConfig._FieldEntry1 = {};

MultilangConfig._FieldEntry1.read = function (pbf, end) {
  return pbf.readFields(
    MultilangConfig._FieldEntry1._readField,
    { key: "", value: "" },
    end
  );
};
MultilangConfig._FieldEntry1._readField = function (tag, obj, pbf) {
  if (tag === 1) obj.key = pbf.readString();
  else if (tag === 2) obj.value = pbf.readString();
};
MultilangConfig._FieldEntry1.write = function (obj, pbf) {
  if (obj.key) pbf.writeStringField(1, obj.key);
  if (obj.value) pbf.writeStringField(2, obj.value);
};

// TimingMetrics ========================================

var TimingMetrics = (exports.TimingMetrics = {});

TimingMetrics.read = function (pbf, end) {
  return pbf.readFields(
    TimingMetrics._readField,
    {
      audio_start_epoch_usec: 0,
      audio_start_time_usec: 0,
      elapsed_wall_time_usec: 0,
      event_end_time_usec: 0,
    },
    end
  );
};
TimingMetrics._readField = function (tag, obj, pbf) {
  if (tag === 1) obj.audio_start_epoch_usec = pbf.readVarint(true);
  else if (tag === 2) obj.audio_start_time_usec = pbf.readVarint(true);
  else if (tag === 3) obj.elapsed_wall_time_usec = pbf.readVarint(true);
  else if (tag === 4) obj.event_end_time_usec = pbf.readVarint(true);
};
TimingMetrics.write = function (obj, pbf) {
  if (obj.audio_start_epoch_usec)
    pbf.writeVarintField(1, obj.audio_start_epoch_usec);
  if (obj.audio_start_time_usec)
    pbf.writeVarintField(2, obj.audio_start_time_usec);
  if (obj.elapsed_wall_time_usec)
    pbf.writeVarintField(3, obj.elapsed_wall_time_usec);
  if (obj.event_end_time_usec) pbf.writeVarintField(4, obj.event_end_time_usec);
};

// HypothesisPart ========================================

var HypothesisPart = (exports.HypothesisPart = {});

HypothesisPart.read = function (pbf, end) {
  return pbf.readFields(
    HypothesisPart._readField,
    { text: [], alignment_ms: 0 },
    end
  );
};
HypothesisPart._readField = function (tag, obj, pbf) {
  if (tag === 1) obj.text.push(pbf.readString());
  else if (tag === 2) obj.alignment_ms = pbf.readVarint(true);
};
HypothesisPart.write = function (obj, pbf) {
  if (obj.text)
    for (var i = 0; i < obj.text.length; i++)
      pbf.writeStringField(1, obj.text[i]);
  if (obj.alignment_ms) pbf.writeVarintField(2, obj.alignment_ms);
};

// SodaRecognitionResult ========================================

var SodaRecognitionResult = (exports.SodaRecognitionResult = {});

SodaRecognitionResult.read = function (pbf, end) {
  return pbf.readFields(
    SodaRecognitionResult._readField,
    {
      hypothesis: [],
      result_type: 0,
      endpoint_reason: 0,
      timing_metrics: null,
      hypothesis_part: [],
    },
    end
  );
};
SodaRecognitionResult._readField = function (tag, obj, pbf) {
  if (tag === 1) obj.hypothesis.push(pbf.readString());
  else if (tag === 2) obj.result_type = pbf.readVarint();
  else if (tag === 3) obj.endpoint_reason = pbf.readVarint();
  else if (tag === 4)
    obj.timing_metrics = TimingMetrics.read(pbf, pbf.readVarint() + pbf.pos);
  else if (tag === 5)
    obj.hypothesis_part.push(
      HypothesisPart.read(pbf, pbf.readVarint() + pbf.pos)
    );
};
SodaRecognitionResult.write = function (obj, pbf) {
  if (obj.hypothesis)
    for (var i = 0; i < obj.hypothesis.length; i++)
      pbf.writeStringField(1, obj.hypothesis[i]);
  if (obj.result_type) pbf.writeVarintField(2, obj.result_type);
  if (obj.endpoint_reason) pbf.writeVarintField(3, obj.endpoint_reason);
  if (obj.timing_metrics)
    pbf.writeMessage(4, TimingMetrics.write, obj.timing_metrics);
  if (obj.hypothesis_part)
    for (i = 0; i < obj.hypothesis_part.length; i++)
      pbf.writeMessage(5, HypothesisPart.write, obj.hypothesis_part[i]);
};

SodaRecognitionResult.ResultType = {
  UNKNOWN: {
    value: 0,
    options: {},
  },
  PARTIAL: {
    value: 1,
    options: {},
  },
  FINAL: {
    value: 2,
    options: {},
  },
  PREFETCH: {
    value: 3,
    options: {},
  },
};

SodaRecognitionResult.FinalResultEndpointReason = {
  ENDPOINT_UNKNOWN: {
    value: 0,
    options: {},
  },
  ENDPOINT_END_OF_SPEECH: {
    value: 1,
    options: {},
  },
  ENDPOINT_END_OF_UTTERANCE: {
    value: 2,
    options: {},
  },
  ENDPOINT_END_OF_AUDIO: {
    value: 3,
    options: {},
  },
  ENDPOINT_ASR_RESET_BY_HOTWORD: {
    value: 4,
    options: {},
  },
  ENDPOINT_ASR_RESET_EXTERNAL: {
    value: 5,
    options: {},
  },
  ENDPOINT_ASR_ERROR: {
    value: 6,
    options: {},
  },
};

// SodaEndpointEvent ========================================

var SodaEndpointEvent = (exports.SodaEndpointEvent = {});

SodaEndpointEvent.read = function (pbf, end) {
  return pbf.readFields(
    SodaEndpointEvent._readField,
    { endpoint_type: { value: 4, options: {} }, timing_metrics: null },
    end
  );
};
SodaEndpointEvent._readField = function (tag, obj, pbf) {
  if (tag === 1) obj.endpoint_type = pbf.readVarint();
  else if (tag === 2)
    obj.timing_metrics = TimingMetrics.read(pbf, pbf.readVarint() + pbf.pos);
};
SodaEndpointEvent.write = function (obj, pbf) {
  if (
    obj.endpoint_type != undefined &&
    obj.endpoint_type !== { value: 4, options: {} }
  )
    pbf.writeVarintField(1, obj.endpoint_type);
  if (obj.timing_metrics)
    pbf.writeMessage(2, TimingMetrics.write, obj.timing_metrics);
};

SodaEndpointEvent.EndpointType = {
  START_OF_SPEECH: {
    value: 0,
    options: {},
  },
  END_OF_SPEECH: {
    value: 1,
    options: {},
  },
  END_OF_AUDIO: {
    value: 2,
    options: {},
  },
  END_OF_UTTERANCE: {
    value: 3,
    options: {},
  },
  UNKNOWN: {
    value: 4,
    options: {},
  },
};

// SodaAudioLevelInfo ========================================

var SodaAudioLevelInfo = (exports.SodaAudioLevelInfo = {});

SodaAudioLevelInfo.read = function (pbf, end) {
  return pbf.readFields(
    SodaAudioLevelInfo._readField,
    { rms: 0, audio_level: 0, audio_time_usec: 0 },
    end
  );
};
SodaAudioLevelInfo._readField = function (tag, obj, pbf) {
  if (tag === 1) obj.rms = pbf.readFloat();
  else if (tag === 2) obj.audio_level = pbf.readFloat();
  else if (tag === 3) obj.audio_time_usec = pbf.readVarint(true);
};
SodaAudioLevelInfo.write = function (obj, pbf) {
  if (obj.rms) pbf.writeFloatField(1, obj.rms);
  if (obj.audio_level) pbf.writeFloatField(2, obj.audio_level);
  if (obj.audio_time_usec) pbf.writeVarintField(3, obj.audio_time_usec);
};

// SodaLangIdEvent ========================================

var SodaLangIdEvent = (exports.SodaLangIdEvent = {});

SodaLangIdEvent.read = function (pbf, end) {
  return pbf.readFields(
    SodaLangIdEvent._readField,
    { language: "", confidence_level: 0 },
    end
  );
};
SodaLangIdEvent._readField = function (tag, obj, pbf) {
  if (tag === 1) obj.language = pbf.readString();
  else if (tag === 2) obj.confidence_level = pbf.readVarint(true);
};
SodaLangIdEvent.write = function (obj, pbf) {
  if (obj.language) pbf.writeStringField(1, obj.language);
  if (obj.confidence_level) pbf.writeVarintField(2, obj.confidence_level);
};

// SodaResponse ========================================

var SodaResponse = (exports.SodaResponse = {});

SodaResponse.read = function (pbf, end) {
  return pbf.readFields(
    SodaResponse._readField,
    {
      soda_type: { value: 0, options: {} },
      recognition_result: null,
      endpoint_event: null,
      audio_level_info: null,
      langid_event: null,
      log_lines: [],
    },
    end
  );
};
SodaResponse._readField = function (tag, obj, pbf) {
  if (tag === 1) obj.soda_type = pbf.readVarint();
  else if (tag === 2)
    obj.recognition_result = SodaRecognitionResult.read(
      pbf,
      pbf.readVarint() + pbf.pos
    );
  else if (tag === 3)
    obj.endpoint_event = SodaEndpointEvent.read(
      pbf,
      pbf.readVarint() + pbf.pos
    );
  else if (tag === 4)
    obj.audio_level_info = SodaAudioLevelInfo.read(
      pbf,
      pbf.readVarint() + pbf.pos
    );
  else if (tag === 5)
    obj.langid_event = SodaLangIdEvent.read(pbf, pbf.readVarint() + pbf.pos);
  else if (tag === 6) obj.log_lines.push(pbf.readString());
};
SodaResponse.write = function (obj, pbf) {
  if (obj.soda_type != undefined && obj.soda_type !== { value: 0, options: {} })
    pbf.writeVarintField(1, obj.soda_type);
  if (obj.recognition_result)
    pbf.writeMessage(2, SodaRecognitionResult.write, obj.recognition_result);
  if (obj.endpoint_event)
    pbf.writeMessage(3, SodaEndpointEvent.write, obj.endpoint_event);
  if (obj.audio_level_info)
    pbf.writeMessage(4, SodaAudioLevelInfo.write, obj.audio_level_info);
  if (obj.langid_event)
    pbf.writeMessage(5, SodaLangIdEvent.write, obj.langid_event);
  if (obj.log_lines)
    for (var i = 0; i < obj.log_lines.length; i++)
      pbf.writeStringField(6, obj.log_lines[i]);
};

SodaResponse.SodaMessageType = {
  UNKNOWN: {
    value: 0,
    options: {},
  },
  RECOGNITION: {
    value: 1,
    options: {},
  },
  STOP: {
    value: 2,
    options: {},
  },
  SHUTDOWN: {
    value: 3,
    options: {},
  },
  START: {
    value: 4,
    options: {},
  },
  ENDPOINT: {
    value: 5,
    options: {},
  },
  AUDIO_LEVEL: {
    value: 6,
    options: {},
  },
  LANGID: {
    value: 7,
    options: {},
  },
  LOGS_ONLY_ARTIFICIAL_MESSAGE: {
    value: 8,
    options: {},
  },
};

export { ExtendedSodaConfigMsg, SodaResponse, SodaRecognitionResult };