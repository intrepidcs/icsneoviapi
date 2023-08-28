---
sidebar_position: 13
id: sdevicesettings-structure
---

# SDeviceSettings Structure

This structure defines a layout for setting device settings for various devices.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
typedef struct __declspec(align(2))
{
   unsigned int uiDevice;
    union {
           SFireSettings fire;
           SFire2Settings fire2;
           SVCAN3Settings vcan3;
           SRADGalaxySettings radgalaxy;
           SRADStar2Settings radstar2;
           SVCAN4Settings vcan4;
           SVCAN412Settings vcan4_12;
           SVividCANSettings vividcan;
           SRADPlutoSettings pluto;
           SRADSuperMoonSettings supermoon;
       } Settings;
} SDeviceSettings;
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
<StructLayout(LayoutKind.Sequential, Pack:=2)> Public Structure SDeviceSettings
  Dim uiDevice As UInt32
  Dim Settings As HardwareSettingsToUse '//HardwareSettingsToUse with correct Struct
End Structure
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[StructLayout(LayoutKind.Sequential,Pack=2)]
public struct SDeviceSettings
{
public UInt32 uiDevice;
public HardwareSettingsToUse Settings;  //HardwareSettingsToUse with correct Struct
}
```
</TabItem>
</Tabs>

**Remarks**

| Item         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uiDevice\_en | <p>Set to indicate the type of hardware that is trying to be accessed.<br/>DeviceFireSettingsType = 0<br/>DeviceFireVnetSettingsType = 1<br/>DeviceFire2SettingsType = 2<br/>DeviceVCAN3SettingsType = 3<br/>DeviceRADGalaxySettingsType = 4<br/>DeviceRADStar2SettingsType = 5<br/>DeviceVCAN4SettingsType = 6<br/>DeviceVCAN412SettingsType = 7<br/>DeviceVividCANSettingsType = 8<br/>DeviceECU_AVBSettingsType = 9<br/>DeviceRADSuperMoonSettingsType = 10<br/>DeviceRADMoon2SettingsType = 11<br/>DeviceRADPlutoSettingsType = 12<br/>DeviceRADGigalogSettingsType = 13<br/>DeviceVCANRFSettingsType = 14<br/>DeviceEEVBSettingsType = 15<br/>DeviceVCAN4IndSettingsType = 16<br/>DeviceNeoECU12SettingsType = 17<br/>DeviceFlexVnetzSettingsType = 18<br/>DeviceCANHUBSettingsType = 19<br/>DeviceIEVBSettingsType = 20<br/>DeviceOBD2SimSettingsType = 21<br/>DeviceCMProbeSettingsType = 22<br/>DeviceOBD2ProSettingsType = 23<br/>DeviceRedSettingsType = 24<br/>DeviceRADPlutoSwitchSettingsType = 25<br/>DeviceRADJupiterSettingsType = 26<br/>DeviceFire3SettingsType = 27<br/>DeviceRadMoonDuoSettingsType = 28</p> |
| settings     | <p>Set to the type for the hardware settings are going to be read from.</p><p>Unions can be used in C++. Other languages this needs to be set. VB Example for RAD Galaxy</p><p>&#x3C;StructLayout(LayoutKind.Sequential, Pack:=2)> Public Structure SDeviceSettings</p><p>Dim uiDevice As UInt32Dim Settings As SRADGalaxySettings</p><p>End Structure</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
