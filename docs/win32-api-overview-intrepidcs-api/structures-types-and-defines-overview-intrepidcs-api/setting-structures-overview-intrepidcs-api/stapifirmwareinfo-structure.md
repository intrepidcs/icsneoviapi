---
sidebar_position: 17
id: stapifirmwareinfo-structure
---

# stAPIFirmwareInfo Structure

This structure continues information regarding the firmware version of a neoVI device.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
struct stAPIFirmwareInfo
{
    int iType;
    // Date and Time (2nd generation neoVI only. See 2nd Generation neoVI Devices)
    int iMainFirmDateDay;
    int iMainFirmDateMonth;
    int iMainFirmDateYear;
    int iMainFirmDateHour;
    int iMainFirmDateMin;
    int iMainFirmDateSecond;
    int iMainFirmChkSum;

    // Version data (3rd generation neoVI only. See 3rd Generation neoVI Devices)
    unsigned char iAppMajor;
    unsigned char iAppMinor;
    unsigned char iManufactureDay;
    unsigned char iManufactureMonth;
    unsigned short iManufactureYear;
    unsigned char iBoardRevMajor;
    unsigned char iBoardRevMinor;
    unsigned char iBootLoaderVersionMajor;
    unsigned char iBootLoaderVersionMinor;
};
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
Public Structure stAPIFirmwareInfo
    Dim iType As Int32
    '// Date and Time (2nd generation neoVI only. See 2nd Generation neoVI Devices)
    Dim iMainFirmDateDay As Int32
    Dim iMainFirmDateMonth As Int32
    Dim iMainFirmDateYear As Int32
    Dim iMainFirmDateHour As Int32
    Dim iMainFirmDateMin As Int32
    Dim iMainFirmDateSecond As Int32
    Dim iMainFirmChkSum As Int32

    '// Version data (3rd generation neoVI only. See 3rd Generation neoVI Devices)
    Dim iAppMajor As Byte
    Dim iAppMinor As Byte
    Dim iManufactureDay As Byte
    Dim iManufactureMonth As Byte
    Dim iManufactureYear As Int16
    Dim iBoardRevMajor As Byte
    Dim iBoardRevMinor As Byte
    Dim iBootLoaderVersionMajor As Byte
    Dim iBootLoaderVersionMinor As Byte
End Structure
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[StructLayout(LayoutKind.Sequential)]
public struct stAPIFirmwareInfo
{
    public int iType;
    // Date and Time (2nd generation neoVI only. See 2nd Generation neoVI Devices)
    public int iMainFirmDateDay;
    public int iMainFirmDateMonth;
    public int iMainFirmDateYear;
    public int iMainFirmDateHour;
    public int iMainFirmDateMin;
    public int iMainFirmDateSecond;
    public int iMainFirmChkSum;

    // Version data (3rd generation neoVI only. See 3rd Generation neoVI Devices)
    public unsigned char iAppMajor;
    public unsigned char iAppMinor;
    public unsigned char iManufactureDay;
    public unsigned char iManufactureMonth;
    public unsigned short iManufactureYear;
    public unsigned char iBoardRevMajor;
    public unsigned char iBoardRevMinor;
    public unsigned char iBootLoaderVersionMajor;
    public unsigned char iBootLoaderVersionMinor;
}
```
</TabItem>
</Tabs>

**Remarks**

**Structure Elements**

| Item                                                                      | Description                                                                                                                                                    |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <span style={{color:"blue"}}>int</span> iType                             | <p>Indicates the generation of hardware:<br/>2 = 2nd generation. See 2nd Generation neoVI Devices<br/>3 = 3rd generation. See 3rd Generation neoVI Devices</p> |
| <span style={{color:"blue"}}>int</span> iMainFirmDateDay                  | 1 - 31 firmware day                                                                                                                                            |
| <span style={{color:"blue"}}>int</span> iMainFirmDateMonth                | 1 - 12 firmware month                                                                                                                                          |
| <span style={{color:"blue"}}>int</span> iMainFirmDateYear                 | 4 digit year (i.e. 2008) firmware year                                                                                                                         |
| <span style={{color:"blue"}}>int</span> iMainFirmDateHour                 | 0 - 23 firmware hour                                                                                                                                           |
| <span style={{color:"blue"}}>int</span> iMainFirmDateMin                  | 0 - 59 firmware minutes                                                                                                                                        |
| <span style={{color:"blue"}}>int</span> iMainFirmDateSecond               | 0 - 59 firmware seconds                                                                                                                                        |
| <span style={{color:"blue"}}>int</span> iMainFirmChkSum                   | Firmware checksum                                                                                                                                              |
| <span style={{color:"blue"}}>unsigned char</span> iAppMajor               | Application major version (3rd generation neoVI only)                                                                                                          |
| <span style={{color:"blue"}}>unsigned char</span> iAppMinor               | Application minor version (3rd generation neoVI only)                                                                                                          |
| <span style={{color:"blue"}}>unsigned char</span> iManufactureDay         | 1 - 31 Manufacture day (3rd generation neoVI only)                                                                                                             |
| <span style={{color:"blue"}}>unsigned char</span> iManufactureMonth       | 1 - 12 Manufacture month (3rd generation neoVI only)                                                                                                           |
| <span style={{color:"blue"}}>unsigned short</span> iManufactureYear       | 4 digit year (i.e. 2008) manufacture year (3rd generation neoVI only)                                                                                          |
| <span style={{color:"blue"}}>unsigned char</span> iBoardRevMajor          | Board revision major (3rd generation neoVI only)                                                                                                               |
| <span style={{color:"blue"}}>unsigned char</span> iBoardRevMinor          | Board revision minor (3rd generation neoVI only)                                                                                                               |
| <span style={{color:"blue"}}>unsigned char</span> iBootLoaderVersionMajor | Bootloader version major (3rd generation neoVI only)                                                                                                           |
| <span style={{color:"blue"}}>unsigned char</span> iBootLoaderVersionMinor | Bootloader version minor (3rd generation neoVI only)                                                                                                           |
