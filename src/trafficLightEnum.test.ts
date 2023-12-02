import { describe, it, expect } from 'vitest';
import { TrafficLight, getTrafficLightStatus } from './trafficLightEnum';

describe('交通信號燈模擬', () => {
  it('應該根據輸入的信號燈狀態返回對應的描述', () => {
    expect(getTrafficLightStatus(TrafficLight.Red)).toBe('The traffic light is Red');
  });
});