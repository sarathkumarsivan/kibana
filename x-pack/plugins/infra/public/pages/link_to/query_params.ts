/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { Location } from 'history';

import { getParamFromQueryString, getQueryStringFromLocation } from '../../utils/url_state';

export const getTimeFromLocation = (location: Location) => {
  const timeParam = getParamFromQueryString(getQueryStringFromLocation(location), 'time');
  return timeParam ? parseFloat(timeParam) : NaN;
};
