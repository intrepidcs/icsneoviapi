---
sidebar_position: 15
id: disk_settings-structure
---

# DISK_SETTINGS Structure

**Structure for storage media on the hardware**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="cpp" label="C/C++ Declare" default>

```cpp
typedef struct __declspec (align(2))
{
   uint8_t disk_layout;
   uint8_t disk_format;
   uint32_t disk_enables;
   uint32_t rsvd0;
   uint32_t rsvd1;
}DISK_SETTINGS;
```
</TabItem>

<TabItem value="vbnet" label="Visual Basic .NET Declare">

```vbnet
<StructLayout(LayoutKind.Sequential, Pack:=2)> Public Structure DISK_SETTINGS
   Dim disk_layout As Byte
   Dim disk_format As Byte
   Dim disk_enables As UInt32
   Dim rsvd0 As UInt32
   Dim rsvd1 As UInt32
End Structure
```
</TabItem>

<TabItem value="c#" label="C# Declare">

```csharp
[StructLayout(LayoutKind.Sequential,Pack=2)]
public struct DISK_SETTINGS
{
   public byte disk_layout;
   public byte disk_format;
   public UInt32 disk_enables;
   public UInt32 rsvd0;
   public UInt32 rsvd1;
}
```
</TabItem>
</Tabs>

#### Remarks

| Item          | Description                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------- |
| disk\_layout  | <p>Reads the layout of the memory media<br/>0=Spanned, 1=RAID0, 2=RAID1, 3=RAID5, 4=Individual</p> |
| disk\_format  | <p>Reads the format of the configured disk<br/>0=Unknown, 1=FAT32, 2=exFAT</p>                     |
| disk\_enables | Not Defined                                                                                       |
| rsvd0         | Reserved                                                                                          |
| rsvd1         | Reserved                                                                                          |
