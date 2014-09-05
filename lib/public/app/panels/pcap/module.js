
var hexHighlightHelper = [];
var mapped_hex_data = [];

var packet_data = {
"pdml": {
"$": {
"version": "0",
"creator": "wireshark/1.10.8",
"time": "Thu Jun 19 12:11:31 2014",
"capture_file": ""
},
"packet": [
{
"proto": [
  {
    "$": {
      "name": "geninfo",
      "pos": "0",
      "showname": "General information",
      "size": "54"
    },
    "field": [
      {
        "$": {
          "name": "num",
          "pos": "0",
          "show": "1",
          "showname": "Number",
          "value": "1",
          "size": "54"
        }
      },
      {
        "$": {
          "name": "len",
          "pos": "0",
          "show": "54",
          "showname": "Frame Length",
          "value": "36",
          "size": "54"
        }
      },
      {
        "$": {
          "name": "caplen",
          "pos": "0",
          "show": "54",
          "showname": "Captured Length",
          "value": "36",
          "size": "54"
        }
      },
      {
        "$": {
          "name": "timestamp",
          "pos": "0",
          "show": "Feb  3, 2013 20:49:19.524111000 CST",
          "showname": "Captured Time",
          "value": "1359946159.524111000",
          "size": "54"
        }
      }
    ]
  },
  {
    "$": {
      "name": "frame",
      "showname": "Frame 1: 54 bytes on wire (432 bits), 54 bytes captured (432 bits) on interface 0",
      "size": "54",
      "pos": "0"
    },
    "field": [
      {
        "$": {
          "name": "frame.interface_id",
          "showname": "Interface id: 0",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.encap_type",
          "showname": "Encapsulation type: Ethernet (1)",
          "size": "0",
          "pos": "0",
          "show": "1"
        }
      },
      {
        "$": {
          "name": "frame.time",
          "showname": "Arrival Time: Feb  3, 2013 20:49:19.524111000 CST",
          "size": "0",
          "pos": "0",
          "show": "\"Feb  3, 2013 20:49:19.524111000 CST\""
        }
      },
      {
        "$": {
          "name": "frame.offset_shift",
          "showname": "Time shift for this packet: 0.000000000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000000000"
        }
      },
      {
        "$": {
          "name": "frame.time_epoch",
          "showname": "Epoch Time: 1359946159.524111000 seconds",
          "size": "0",
          "pos": "0",
          "show": "1359946159.524111000"
        }
      },
      {
        "$": {
          "name": "frame.time_delta",
          "showname": "Time delta from previous captured frame: 0.000000000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000000000"
        }
      },
      {
        "$": {
          "name": "frame.time_delta_displayed",
          "showname": "Time delta from previous displayed frame: 0.000000000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000000000"
        }
      },
      {
        "$": {
          "name": "frame.time_relative",
          "showname": "Time since reference or first frame: 0.000000000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000000000"
        }
      },
      {
        "$": {
          "name": "frame.number",
          "showname": "Frame Number: 1",
          "size": "0",
          "pos": "0",
          "show": "1"
        }
      },
      {
        "$": {
          "name": "frame.len",
          "showname": "Frame Length: 54 bytes (432 bits)",
          "size": "0",
          "pos": "0",
          "show": "54"
        }
      },
      {
        "$": {
          "name": "frame.cap_len",
          "showname": "Capture Length: 54 bytes (432 bits)",
          "size": "0",
          "pos": "0",
          "show": "54"
        }
      },
      {
        "$": {
          "name": "frame.marked",
          "showname": "Frame is marked: False",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.ignored",
          "showname": "Frame is ignored: False",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.protocols",
          "showname": "Protocols in frame: eth:ip:igmp",
          "size": "0",
          "pos": "0",
          "show": "eth:ip:igmp"
        }
      }
    ]
  },
  {
    "$": {
      "name": "eth",
      "showname": "Ethernet II, Src: Vmware_af:9c:dc (00:0c:29:af:9c:dc), Dst: IPv4mcast_00:00:16 (01:00:5e:00:00:16)",
      "size": "14",
      "pos": "0"
    },
    "field": [
      {
        "$": {
          "name": "eth.dst",
          "showname": "Destination: IPv4mcast_00:00:16 (01:00:5e:00:00:16)",
          "size": "6",
          "pos": "0",
          "show": "01:00:5e:00:00:16",
          "value": "01005e000016"
        },
        "field": [
          {
            "$": {
              "name": "eth.addr",
              "showname": "Address: IPv4mcast_00:00:16 (01:00:5e:00:00:16)",
              "size": "6",
              "pos": "0",
              "show": "01:00:5e:00:00:16",
              "value": "01005e000016"
            }
          },
          {
            "$": {
              "name": "eth.lg",
              "showname": ".... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)",
              "size": "3",
              "pos": "0",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "01005e"
            }
          },
          {
            "$": {
              "name": "eth.ig",
              "showname": ".... ...1 .... .... .... .... = IG bit: Group address (multicast/broadcast)",
              "size": "3",
              "pos": "0",
              "show": "1",
              "value": "1",
              "unmaskedvalue": "01005e"
            }
          }
        ]
      },
      {
        "$": {
          "name": "eth.src",
          "showname": "Source: Vmware_af:9c:dc (00:0c:29:af:9c:dc)",
          "size": "6",
          "pos": "6",
          "show": "00:0c:29:af:9c:dc",
          "value": "000c29af9cdc"
        },
        "field": [
          {
            "$": {
              "name": "eth.addr",
              "showname": "Address: Vmware_af:9c:dc (00:0c:29:af:9c:dc)",
              "size": "6",
              "pos": "6",
              "show": "00:0c:29:af:9c:dc",
              "value": "000c29af9cdc"
            }
          },
          {
            "$": {
              "name": "eth.lg",
              "showname": ".... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)",
              "size": "3",
              "pos": "6",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "000c29"
            }
          },
          {
            "$": {
              "name": "eth.ig",
              "showname": ".... ...0 .... .... .... .... = IG bit: Individual address (unicast)",
              "size": "3",
              "pos": "6",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "000c29"
            }
          }
        ]
      },
      {
        "$": {
          "name": "eth.type",
          "showname": "Type: IP (0x0800)",
          "size": "2",
          "pos": "12",
          "show": "2048",
          "value": "0800"
        }
      }
    ]
  },
  {
    "$": {
      "name": "ip",
      "showname": "Internet Protocol Version 4, Src: 172.16.253.130 (172.16.253.130), Dst: 224.0.0.22 (224.0.0.22)",
      "size": "24",
      "pos": "14"
    },
    "field": [
      {
        "$": {
          "name": "ip.version",
          "showname": "Version: 4",
          "size": "1",
          "pos": "14",
          "show": "4",
          "value": "46"
        }
      },
      {
        "$": {
          "name": "ip.hdr_len",
          "showname": "Header length: 24 bytes",
          "size": "1",
          "pos": "14",
          "show": "24",
          "value": "46"
        }
      },
      {
        "$": {
          "name": "ip.dsfield",
          "showname": "Differentiated Services Field: 0x00 (DSCP 0x00: Default; ECN: 0x00: Not-ECT (Not ECN-Capable Transport))",
          "size": "1",
          "pos": "15",
          "show": "0",
          "value": "00"
        },
        "field": [
          {
            "$": {
              "name": "ip.dsfield.dscp",
              "showname": "0000 00.. = Differentiated Services Codepoint: Default (0x00)",
              "size": "1",
              "pos": "15",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "00"
            }
          },
          {
            "$": {
              "name": "ip.dsfield.ecn",
              "showname": ".... ..00 = Explicit Congestion Notification: Not-ECT (Not ECN-Capable Transport) (0x00)",
              "size": "1",
              "pos": "15",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "00"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.len",
          "showname": "Total Length: 40",
          "size": "2",
          "pos": "16",
          "show": "40",
          "value": "0028"
        }
      },
      {
        "$": {
          "name": "ip.id",
          "showname": "Identification: 0x002b (43)",
          "size": "2",
          "pos": "18",
          "show": "43",
          "value": "002b"
        }
      },
      {
        "$": {
          "name": "ip.flags",
          "showname": "Flags: 0x00",
          "size": "1",
          "pos": "20",
          "show": "0",
          "value": "00"
        },
        "field": [
          {
            "$": {
              "name": "ip.flags.rb",
              "showname": "0... .... = Reserved bit: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "00"
            }
          },
          {
            "$": {
              "name": "ip.flags.df",
              "showname": ".0.. .... = Don't fragment: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "00"
            }
          },
          {
            "$": {
              "name": "ip.flags.mf",
              "showname": "..0. .... = More fragments: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "00"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.frag_offset",
          "showname": "Fragment offset: 0",
          "size": "2",
          "pos": "20",
          "show": "0",
          "value": "0000"
        }
      },
      {
        "$": {
          "name": "ip.ttl",
          "showname": "Time to live: 1",
          "size": "1",
          "pos": "22",
          "show": "1",
          "value": "01"
        }
      },
      {
        "$": {
          "name": "ip.proto",
          "showname": "Protocol: IGMP (2)",
          "size": "1",
          "pos": "23",
          "show": "2",
          "value": "02"
        }
      },
      {
        "$": {
          "name": "ip.checksum",
          "showname": "Header checksum: 0x9afb [validation disabled]",
          "size": "2",
          "pos": "24",
          "show": "39675",
          "value": "9afb"
        },
        "field": [
          {
            "$": {
              "name": "ip.checksum_good",
              "showname": "Good: False",
              "size": "2",
              "pos": "24",
              "show": "0",
              "value": "9afb"
            }
          },
          {
            "$": {
              "name": "ip.checksum_bad",
              "showname": "Bad: False",
              "size": "2",
              "pos": "24",
              "show": "0",
              "value": "9afb"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.src",
          "showname": "Source: 172.16.253.130 (172.16.253.130)",
          "size": "4",
          "pos": "26",
          "show": "172.16.253.130",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.addr",
          "showname": "Source or Destination Address: 172.16.253.130 (172.16.253.130)",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.16.253.130",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.src_host",
          "showname": "Source Host: 172.16.253.130",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.16.253.130",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.host",
          "showname": "Source or Destination Host: 172.16.253.130",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.16.253.130",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.dst",
          "showname": "Destination: 224.0.0.22 (224.0.0.22)",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "ip.addr",
          "showname": "Source or Destination Address: 224.0.0.22 (224.0.0.22)",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "ip.dst_host",
          "showname": "Destination Host: 224.0.0.22",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "ip.host",
          "showname": "Source or Destination Host: 224.0.0.22",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Source GeoIP: Unknown",
          "size": "4",
          "pos": "26",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Destination GeoIP: Unknown",
          "size": "4",
          "pos": "30",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Options: (4 bytes), Router Alert",
          "size": "4",
          "pos": "34",
          "value": "94040000"
        },
        "field": [
          {
            "$": {
              "name": "",
              "show": "Router Alert (4 bytes): Router shall examine packet (0)",
              "size": "4",
              "pos": "34",
              "value": "94040000"
            },
            "field": [
              {
                "$": {
                  "name": "ip.opt.type",
                  "showname": "Type: 148",
                  "size": "1",
                  "pos": "34",
                  "show": "148",
                  "value": "94"
                },
                "field": [
                  {
                    "$": {
                      "name": "ip.opt.type.copy",
                      "showname": "1... .... = Copy on fragmentation: Yes",
                      "size": "1",
                      "pos": "34",
                      "show": "1",
                      "value": "1",
                      "unmaskedvalue": "94"
                    }
                  },
                  {
                    "$": {
                      "name": "ip.opt.type.class",
                      "showname": ".00. .... = Class: Control (0)",
                      "size": "1",
                      "pos": "34",
                      "show": "0",
                      "value": "0",
                      "unmaskedvalue": "94"
                    }
                  },
                  {
                    "$": {
                      "name": "ip.opt.type.number",
                      "showname": "...1 0100 = Number: Router Alert (20)",
                      "size": "1",
                      "pos": "34",
                      "show": "20",
                      "value": "14",
                      "unmaskedvalue": "94"
                    }
                  }
                ]
              },
              {
                "$": {
                  "name": "ip.opt.len",
                  "showname": "Length: 4",
                  "size": "1",
                  "pos": "35",
                  "show": "4",
                  "value": "04"
                }
              },
              {
                "$": {
                  "name": "ip.opt.ra",
                  "showname": "Router Alert: Router shall examine packet (0)",
                  "size": "2",
                  "pos": "36",
                  "show": "0",
                  "value": "0000"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "$": {
      "name": "igmp",
      "showname": "Internet Group Management Protocol",
      "size": "16",
      "pos": "38"
    },
    "field": [
      {
        "$": {
          "name": "igmp.version",
          "showname": "IGMP Version: 3",
          "size": "0",
          "pos": "38",
          "show": "3"
        }
      },
      {
        "$": {
          "name": "igmp.type",
          "showname": "Type: Membership Report (0x22)",
          "size": "1",
          "pos": "38",
          "show": "34",
          "value": "22"
        }
      },
      {
        "$": {
          "name": "igmp.checksum",
          "showname": "Header checksum: 0xeb03 [correct]",
          "size": "2",
          "pos": "40",
          "show": "60163",
          "value": "eb03"
        }
      },
      {
        "$": {
          "name": "igmp.num_grp_recs",
          "showname": "Num Group Records: 1",
          "size": "2",
          "pos": "44",
          "show": "1",
          "value": "0001"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Group Record : 239.255.255.250  Change To Include Mode",
          "size": "8",
          "pos": "46",
          "value": "03000000effffffa"
        },
        "field": [
          {
            "$": {
              "name": "igmp.record_type",
              "showname": "Record Type: Change To Include Mode (3)",
              "size": "1",
              "pos": "46",
              "show": "3",
              "value": "03"
            }
          },
          {
            "$": {
              "name": "igmp.aux_data_len",
              "showname": "Aux Data Len: 0",
              "size": "1",
              "pos": "47",
              "show": "0",
              "value": "00"
            }
          },
          {
            "$": {
              "name": "igmp.num_src",
              "showname": "Num Src: 0",
              "size": "2",
              "pos": "48",
              "show": "0",
              "value": "0000"
            }
          },
          {
            "$": {
              "name": "igmp.maddr",
              "showname": "Multicast Address: 239.255.255.250 (239.255.255.250)",
              "size": "4",
              "pos": "50",
              "show": "239.255.255.250",
              "value": "effffffa"
            }
          }
        ]
      }
    ]
  }
],
"hexPacket": [ "01", "00", "5e", "00", "00", "16", "00", "0c",
"29", "af", "9c", "dc", "08", "00", "46", "00", "00", "28", "00", "2b", "00", "00", "01", "02",
"9a", "fb", "ac", "10", "fd", "82", "e0", "00", "00", "16", "94", "04", "00", "00", "22", "00",
"eb", "03", "00", "00", "00", "01", "03", "00", "00", "00", "ef", "ff", "ff", "fa"]
},
{
"proto": [
  {
    "$": {
      "name": "geninfo",
      "pos": "0",
      "showname": "General information",
      "size": "54"
    },
    "field": [
      {
        "$": {
          "name": "num",
          "pos": "0",
          "show": "2",
          "showname": "Number",
          "value": "2",
          "size": "54"
        }
      },
      {
        "$": {
          "name": "len",
          "pos": "0",
          "show": "54",
          "showname": "Frame Length",
          "value": "36",
          "size": "54"
        }
      },
      {
        "$": {
          "name": "caplen",
          "pos": "0",
          "show": "54",
          "showname": "Captured Length",
          "value": "36",
          "size": "54"
        }
      },
      {
        "$": {
          "name": "timestamp",
          "pos": "0",
          "show": "Feb  3, 2013 20:49:19.528804000 CST",
          "showname": "Captured Time",
          "value": "1359946159.528804000",
          "size": "54"
        }
      }
    ]
  },
  {
    "$": {
      "name": "frame",
      "showname": "Frame 2: 54 bytes on wire (432 bits), 54 bytes captured (432 bits) on interface 0",
      "size": "54",
      "pos": "0"
    },
    "field": [
      {
        "$": {
          "name": "frame.interface_id",
          "showname": "Interface id: 0",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.encap_type",
          "showname": "Encapsulation type: Ethernet (1)",
          "size": "0",
          "pos": "0",
          "show": "1"
        }
      },
      {
        "$": {
          "name": "frame.time",
          "showname": "Arrival Time: Feb  3, 2013 20:49:19.528804000 CST",
          "size": "0",
          "pos": "0",
          "show": "\"Feb  3, 2013 20:49:19.528804000 CST\""
        }
      },
      {
        "$": {
          "name": "frame.offset_shift",
          "showname": "Time shift for this packet: 0.000000000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000000000"
        }
      },
      {
        "$": {
          "name": "frame.time_epoch",
          "showname": "Epoch Time: 1359946159.528804000 seconds",
          "size": "0",
          "pos": "0",
          "show": "1359946159.528804000"
        }
      },
      {
        "$": {
          "name": "frame.time_delta",
          "showname": "Time delta from previous captured frame: 0.004693000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.004693000"
        }
      },
      {
        "$": {
          "name": "frame.time_delta_displayed",
          "showname": "Time delta from previous displayed frame: 0.004693000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.004693000"
        }
      },
      {
        "$": {
          "name": "frame.time_relative",
          "showname": "Time since reference or first frame: 0.004693000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.004693000"
        }
      },
      {
        "$": {
          "name": "frame.number",
          "showname": "Frame Number: 2",
          "size": "0",
          "pos": "0",
          "show": "2"
        }
      },
      {
        "$": {
          "name": "frame.len",
          "showname": "Frame Length: 54 bytes (432 bits)",
          "size": "0",
          "pos": "0",
          "show": "54"
        }
      },
      {
        "$": {
          "name": "frame.cap_len",
          "showname": "Capture Length: 54 bytes (432 bits)",
          "size": "0",
          "pos": "0",
          "show": "54"
        }
      },
      {
        "$": {
          "name": "frame.marked",
          "showname": "Frame is marked: False",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.ignored",
          "showname": "Frame is ignored: False",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.protocols",
          "showname": "Protocols in frame: eth:ip:igmp",
          "size": "0",
          "pos": "0",
          "show": "eth:ip:igmp"
        }
      }
    ]
  },
  {
    "$": {
      "name": "eth",
      "showname": "Ethernet II, Src: Vmware_af:9c:dc (00:0c:29:af:9c:dc), Dst: IPv4mcast_00:00:16 (01:00:5e:00:00:16)",
      "size": "14",
      "pos": "0"
    },
    "field": [
      {
        "$": {
          "name": "eth.dst",
          "showname": "Destination: IPv4mcast_00:00:16 (01:00:5e:00:00:16)",
          "size": "6",
          "pos": "0",
          "show": "01:00:5e:00:00:16",
          "value": "01005e000016"
        },
        "field": [
          {
            "$": {
              "name": "eth.addr",
              "showname": "Address: IPv4mcast_00:00:16 (01:00:5e:00:00:16)",
              "size": "6",
              "pos": "0",
              "show": "01:00:5e:00:00:16",
              "value": "01005e000016"
            }
          },
          {
            "$": {
              "name": "eth.lg",
              "showname": ".... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)",
              "size": "3",
              "pos": "0",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "01005e"
            }
          },
          {
            "$": {
              "name": "eth.ig",
              "showname": ".... ...1 .... .... .... .... = IG bit: Group address (multicast/broadcast)",
              "size": "3",
              "pos": "0",
              "show": "1",
              "value": "1",
              "unmaskedvalue": "01005e"
            }
          }
        ]
      },
      {
        "$": {
          "name": "eth.src",
          "showname": "Source: Vmware_af:9c:dc (00:0c:29:af:9c:dc)",
          "size": "6",
          "pos": "6",
          "show": "00:0c:29:af:9c:dc",
          "value": "000c29af9cdc"
        },
        "field": [
          {
            "$": {
              "name": "eth.addr",
              "showname": "Address: Vmware_af:9c:dc (00:0c:29:af:9c:dc)",
              "size": "6",
              "pos": "6",
              "show": "00:0c:29:af:9c:dc",
              "value": "000c29af9cdc"
            }
          },
          {
            "$": {
              "name": "eth.lg",
              "showname": ".... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)",
              "size": "3",
              "pos": "6",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "000c29"
            }
          },
          {
            "$": {
              "name": "eth.ig",
              "showname": ".... ...0 .... .... .... .... = IG bit: Individual address (unicast)",
              "size": "3",
              "pos": "6",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "000c29"
            }
          }
        ]
      },
      {
        "$": {
          "name": "eth.type",
          "showname": "Type: IP (0x0800)",
          "size": "2",
          "pos": "12",
          "show": "2048",
          "value": "0800"
        }
      }
    ]
  },
  {
    "$": {
      "name": "ip",
      "showname": "Internet Protocol Version 4, Src: 172.45.221.412 (172.45.221.412), Dst: 224.0.0.22 (224.0.0.22)",
      "size": "24",
      "pos": "14"
    },
    "field": [
      {
        "$": {
          "name": "ip.version",
          "showname": "Version: 4",
          "size": "1",
          "pos": "14",
          "show": "4",
          "value": "46"
        }
      },
      {
        "$": {
          "name": "ip.hdr_len",
          "showname": "Header length: 24 bytes",
          "size": "1",
          "pos": "14",
          "show": "24",
          "value": "46"
        }
      },
      {
        "$": {
          "name": "ip.dsfield",
          "showname": "Differentiated Services Field: 0x00 (DSCP 0x00: Default; ECN: 0x00: Not-ECT (Not ECN-Capable Transport))",
          "size": "1",
          "pos": "15",
          "show": "0",
          "value": "00"
        },
        "field": [
          {
            "$": {
              "name": "ip.dsfield.dscp",
              "showname": "0000 00.. = Differentiated Services Codepoint: Default (0x00)",
              "size": "1",
              "pos": "15",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "00"
            }
          },
          {
            "$": {
              "name": "ip.dsfield.ecn",
              "showname": ".... ..00 = Explicit Congestion Notification: Not-ECT (Not ECN-Capable Transport) (0x00)",
              "size": "1",
              "pos": "15",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "00"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.len",
          "showname": "Total Length: 40",
          "size": "2",
          "pos": "16",
          "show": "40",
          "value": "0028"
        }
      },
      {
        "$": {
          "name": "ip.id",
          "showname": "Identification: 0x002c (44)",
          "size": "2",
          "pos": "18",
          "show": "44",
          "value": "002c"
        }
      },
      {
        "$": {
          "name": "ip.flags",
          "showname": "Flags: 0x00",
          "size": "1",
          "pos": "20",
          "show": "0",
          "value": "00"
        },
        "field": [
          {
            "$": {
              "name": "ip.flags.rb",
              "showname": "0... .... = Reserved bit: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "00"
            }
          },
          {
            "$": {
              "name": "ip.flags.df",
              "showname": ".0.. .... = Don't fragment: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "00"
            }
          },
          {
            "$": {
              "name": "ip.flags.mf",
              "showname": "..0. .... = More fragments: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "00"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.frag_offset",
          "showname": "Fragment offset: 0",
          "size": "2",
          "pos": "20",
          "show": "0",
          "value": "0000"
        }
      },
      {
        "$": {
          "name": "ip.ttl",
          "showname": "Time to live: 1",
          "size": "1",
          "pos": "22",
          "show": "1",
          "value": "01"
        }
      },
      {
        "$": {
          "name": "ip.proto",
          "showname": "Protocol: IGMP (2)",
          "size": "1",
          "pos": "23",
          "show": "2",
          "value": "02"
        }
      },
      {
        "$": {
          "name": "ip.checksum",
          "showname": "Header checksum: 0x9afa [validation disabled]",
          "size": "2",
          "pos": "24",
          "show": "39674",
          "value": "9afa"
        },
        "field": [
          {
            "$": {
              "name": "ip.checksum_good",
              "showname": "Good: False",
              "size": "2",
              "pos": "24",
              "show": "0",
              "value": "9afa"
            }
          },
          {
            "$": {
              "name": "ip.checksum_bad",
              "showname": "Bad: False",
              "size": "2",
              "pos": "24",
              "show": "0",
              "value": "9afa"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.src",
          "showname": "Source: 172.45.221.412 (172.45.221.412)",
          "size": "4",
          "pos": "26",
          "show": "172.45.221.412",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.addr",
          "showname": "Source or Destination Address: 172.45.221.412 (172.45.221.412)",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.45.221.412",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.src_host",
          "showname": "Source Host: 172.45.221.412",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.45.221.412",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.host",
          "showname": "Source or Destination Host: 172.45.221.412",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.45.221.412",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.dst",
          "showname": "Destination: 224.0.0.22 (224.0.0.22)",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "ip.addr",
          "showname": "Source or Destination Address: 224.0.0.22 (224.0.0.22)",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "ip.dst_host",
          "showname": "Destination Host: 224.0.0.22",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "ip.host",
          "showname": "Source or Destination Host: 224.0.0.22",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Source GeoIP: Unknown",
          "size": "4",
          "pos": "26",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Destination GeoIP: Unknown",
          "size": "4",
          "pos": "30",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Options: (4 bytes), Router Alert",
          "size": "4",
          "pos": "34",
          "value": "94040000"
        },
        "field": [
          {
            "$": {
              "name": "",
              "show": "Router Alert (4 bytes): Router shall examine packet (0)",
              "size": "4",
              "pos": "34",
              "value": "94040000"
            },
            "field": [
              {
                "$": {
                  "name": "ip.opt.type",
                  "showname": "Type: 148",
                  "size": "1",
                  "pos": "34",
                  "show": "148",
                  "value": "94"
                },
                "field": [
                  {
                    "$": {
                      "name": "ip.opt.type.copy",
                      "showname": "1... .... = Copy on fragmentation: Yes",
                      "size": "1",
                      "pos": "34",
                      "show": "1",
                      "value": "1",
                      "unmaskedvalue": "94"
                    }
                  },
                  {
                    "$": {
                      "name": "ip.opt.type.class",
                      "showname": ".00. .... = Class: Control (0)",
                      "size": "1",
                      "pos": "34",
                      "show": "0",
                      "value": "0",
                      "unmaskedvalue": "94"
                    }
                  },
                  {
                    "$": {
                      "name": "ip.opt.type.number",
                      "showname": "...1 0100 = Number: Router Alert (20)",
                      "size": "1",
                      "pos": "34",
                      "show": "20",
                      "value": "14",
                      "unmaskedvalue": "94"
                    }
                  }
                ]
              },
              {
                "$": {
                  "name": "ip.opt.len",
                  "showname": "Length: 4",
                  "size": "1",
                  "pos": "35",
                  "show": "4",
                  "value": "04"
                }
              },
              {
                "$": {
                  "name": "ip.opt.ra",
                  "showname": "Router Alert: Router shall examine packet (0)",
                  "size": "2",
                  "pos": "36",
                  "show": "0",
                  "value": "0000"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "$": {
      "name": "igmp",
      "showname": "Internet Group Management Protocol",
      "size": "16",
      "pos": "38"
    },
    "field": [
      {
        "$": {
          "name": "igmp.version",
          "showname": "IGMP Version: 3",
          "size": "0",
          "pos": "38",
          "show": "3"
        }
      },
      {
        "$": {
          "name": "igmp.type",
          "showname": "Type: Membership Report (0x22)",
          "size": "1",
          "pos": "38",
          "show": "34",
          "value": "22"
        }
      },
      {
        "$": {
          "name": "igmp.checksum",
          "showname": "Header checksum: 0xea03 [correct]",
          "size": "2",
          "pos": "40",
          "show": "59907",
          "value": "ea03"
        }
      },
      {
        "$": {
          "name": "igmp.num_grp_recs",
          "showname": "Num Group Records: 1",
          "size": "2",
          "pos": "44",
          "show": "1",
          "value": "0001"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Group Record : 239.255.255.250  Change To Exclude Mode",
          "size": "8",
          "pos": "46",
          "value": "04000000effffffa"
        },
        "field": [
          {
            "$": {
              "name": "igmp.record_type",
              "showname": "Record Type: Change To Exclude Mode (4)",
              "size": "1",
              "pos": "46",
              "show": "4",
              "value": "04"
            }
          },
          {
            "$": {
              "name": "igmp.aux_data_len",
              "showname": "Aux Data Len: 0",
              "size": "1",
              "pos": "47",
              "show": "0",
              "value": "00"
            }
          },
          {
            "$": {
              "name": "igmp.num_src",
              "showname": "Num Src: 0",
              "size": "2",
              "pos": "48",
              "show": "0",
              "value": "0000"
            }
          },
          {
            "$": {
              "name": "igmp.maddr",
              "showname": "Multicast Address: 239.255.255.250 (239.255.255.250)",
              "size": "4",
              "pos": "50",
              "show": "239.255.255.250",
              "value": "effffffa"
            }
          }
        ]
      }
    ]
  }
],
"hexPacket": [ "02", "00", "5e", "00", "00", "16", "00", "0c",
"29", "af", "9c", "dc", "08", "00", "46", "00", "00", "28", "00", "2b", "00", "00", "01", "02",
"9a", "fb", "ac", "10", "fd", "82", "e0", "00", "00", "16", "94", "04", "00", "00", "22", "00",
"eb", "03", "00", "00", "00", "01", "03", "00", "00", "00", "ef", "ff", "ff", "fa"]
},{
"proto": [
  {
    "$": {
      "name": "geninfo",
      "pos": "0",
      "showname": "General information",
      "size": "62"
    },
    "field": [
      {
        "$": {
          "name": "num",
          "pos": "0",
          "show": "29",
          "showname": "Number",
          "value": "1d",
          "size": "62"
        }
      },
      {
        "$": {
          "name": "len",
          "pos": "0",
          "show": "62",
          "showname": "Frame Length",
          "value": "3e",
          "size": "62"
        }
      },
      {
        "$": {
          "name": "caplen",
          "pos": "0",
          "show": "62",
          "showname": "Captured Length",
          "value": "3e",
          "size": "62"
        }
      },
      {
        "$": {
          "name": "timestamp",
          "pos": "0",
          "show": "Feb  3, 2013 20:52:07.097975000 CST",
          "showname": "Captured Time",
          "value": "1359946327.097975000",
          "size": "62"
        }
      }
    ]
  },
  {
    "$": {
      "name": "frame",
      "showname": "Frame 29: 62 bytes on wire (496 bits), 62 bytes captured (496 bits) on interface 0",
      "size": "62",
      "pos": "0"
    },
    "field": [
      {
        "$": {
          "name": "frame.interface_id",
          "showname": "Interface id: 0",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.encap_type",
          "showname": "Encapsulation type: Ethernet (1)",
          "size": "0",
          "pos": "0",
          "show": "1"
        }
      },
      {
        "$": {
          "name": "frame.time",
          "showname": "Arrival Time: Feb  3, 2013 20:52:07.097975000 CST",
          "size": "0",
          "pos": "0",
          "show": "\"Feb  3, 2013 20:52:07.097975000 CST\""
        }
      },
      {
        "$": {
          "name": "frame.offset_shift",
          "showname": "Time shift for this packet: 0.000000000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000000000"
        }
      },
      {
        "$": {
          "name": "frame.time_epoch",
          "showname": "Epoch Time: 1359946327.097975000 seconds",
          "size": "0",
          "pos": "0",
          "show": "1359946327.097975000"
        }
      },
      {
        "$": {
          "name": "frame.time_delta",
          "showname": "Time delta from previous captured frame: 0.000010000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000010000"
        }
      },
      {
        "$": {
          "name": "frame.time_delta_displayed",
          "showname": "Time delta from previous displayed frame: 0.000010000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000010000"
        }
      },
      {
        "$": {
          "name": "frame.time_relative",
          "showname": "Time since reference or first frame: 167.573864000 seconds",
          "size": "0",
          "pos": "0",
          "show": "167.573864000"
        }
      },
      {
        "$": {
          "name": "frame.number",
          "showname": "Frame Number: 29",
          "size": "0",
          "pos": "0",
          "show": "29"
        }
      },
      {
        "$": {
          "name": "frame.len",
          "showname": "Frame Length: 62 bytes (496 bits)",
          "size": "0",
          "pos": "0",
          "show": "62"
        }
      },
      {
        "$": {
          "name": "frame.cap_len",
          "showname": "Capture Length: 62 bytes (496 bits)",
          "size": "0",
          "pos": "0",
          "show": "62"
        }
      },
      {
        "$": {
          "name": "frame.marked",
          "showname": "Frame is marked: False",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.ignored",
          "showname": "Frame is ignored: False",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.protocols",
          "showname": "Protocols in frame: eth:ip:tcp",
          "size": "0",
          "pos": "0",
          "show": "eth:ip:tcp"
        }
      }
    ]
  },
  {
    "$": {
      "name": "eth",
      "showname": "Ethernet II, Src: Vmware_af:9c:dc (00:0c:29:af:9c:dc), Dst: Vmware_f2:7a:09 (00:50:56:f2:7a:09)",
      "size": "14",
      "pos": "0"
    },
    "field": [
      {
        "$": {
          "name": "eth.dst",
          "showname": "Destination: Vmware_f2:7a:09 (00:50:56:f2:7a:09)",
          "size": "6",
          "pos": "0",
          "show": "00:50:56:f2:7a:09",
          "value": "005056f27a09"
        },
        "field": [
          {
            "$": {
              "name": "eth.addr",
              "showname": "Address: Vmware_f2:7a:09 (00:50:56:f2:7a:09)",
              "size": "6",
              "pos": "0",
              "show": "00:50:56:f2:7a:09",
              "value": "005056f27a09"
            }
          },
          {
            "$": {
              "name": "eth.lg",
              "showname": ".... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)",
              "size": "3",
              "pos": "0",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "005056"
            }
          },
          {
            "$": {
              "name": "eth.ig",
              "showname": ".... ...0 .... .... .... .... = IG bit: Individual address (unicast)",
              "size": "3",
              "pos": "0",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "005056"
            }
          }
        ]
      },
      {
        "$": {
          "name": "eth.src",
          "showname": "Source: Vmware_af:9c:dc (00:0c:29:af:9c:dc)",
          "size": "6",
          "pos": "6",
          "show": "00:0c:29:af:9c:dc",
          "value": "000c29af9cdc"
        },
        "field": [
          {
            "$": {
              "name": "eth.addr",
              "showname": "Address: Vmware_af:9c:dc (00:0c:29:af:9c:dc)",
              "size": "6",
              "pos": "6",
              "show": "00:0c:29:af:9c:dc",
              "value": "000c29af9cdc"
            }
          },
          {
            "$": {
              "name": "eth.lg",
              "showname": ".... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)",
              "size": "3",
              "pos": "6",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "000c29"
            }
          },
          {
            "$": {
              "name": "eth.ig",
              "showname": ".... ...0 .... .... .... .... = IG bit: Individual address (unicast)",
              "size": "3",
              "pos": "6",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "000c29"
            }
          }
        ]
      },
      {
        "$": {
          "name": "eth.type",
          "showname": "Type: IP (0x0800)",
          "size": "2",
          "pos": "12",
          "show": "2048",
          "value": "0800"
        }
      }
    ]
  },
  {
    "$": {
      "name": "ip",
      "showname": "Internet Protocol Version 4, Src: 172.16.253.130 (172.16.253.130), Dst: 222.77.70.233 (222.77.70.233)",
      "size": "20",
      "pos": "14"
    },
    "field": [
      {
        "$": {
          "name": "ip.version",
          "showname": "Version: 4",
          "size": "1",
          "pos": "14",
          "show": "4",
          "value": "45"
        }
      },
      {
        "$": {
          "name": "ip.hdr_len",
          "showname": "Header length: 20 bytes",
          "size": "1",
          "pos": "14",
          "show": "20",
          "value": "45"
        }
      },
      {
        "$": {
          "name": "ip.dsfield",
          "showname": "Differentiated Services Field: 0x00 (DSCP 0x00: Default; ECN: 0x00: Not-ECT (Not ECN-Capable Transport))",
          "size": "1",
          "pos": "15",
          "show": "0",
          "value": "00"
        },
        "field": [
          {
            "$": {
              "name": "ip.dsfield.dscp",
              "showname": "0000 00.. = Differentiated Services Codepoint: Default (0x00)",
              "size": "1",
              "pos": "15",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "00"
            }
          },
          {
            "$": {
              "name": "ip.dsfield.ecn",
              "showname": ".... ..00 = Explicit Congestion Notification: Not-ECT (Not ECN-Capable Transport) (0x00)",
              "size": "1",
              "pos": "15",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "00"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.len",
          "showname": "Total Length: 48",
          "size": "2",
          "pos": "16",
          "show": "48",
          "value": "0030"
        }
      },
      {
        "$": {
          "name": "ip.id",
          "showname": "Identification: 0x0040 (64)",
          "size": "2",
          "pos": "18",
          "show": "64",
          "value": "0040"
        }
      },
      {
        "$": {
          "name": "ip.flags",
          "showname": "Flags: 0x02 (Don't Fragment)",
          "size": "1",
          "pos": "20",
          "show": "2",
          "value": "40"
        },
        "field": [
          {
            "$": {
              "name": "ip.flags.rb",
              "showname": "0... .... = Reserved bit: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "40"
            }
          },
          {
            "$": {
              "name": "ip.flags.df",
              "showname": ".1.. .... = Don't fragment: Set",
              "size": "1",
              "pos": "20",
              "show": "1",
              "value": "40"
            }
          },
          {
            "$": {
              "name": "ip.flags.mf",
              "showname": "..0. .... = More fragments: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "40"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.frag_offset",
          "showname": "Fragment offset: 0",
          "size": "2",
          "pos": "20",
          "show": "0",
          "value": "4000"
        }
      },
      {
        "$": {
          "name": "ip.ttl",
          "showname": "Time to live: 128",
          "size": "1",
          "pos": "22",
          "show": "128",
          "value": "80"
        }
      },
      {
        "$": {
          "name": "ip.proto",
          "showname": "Protocol: TCP (6)",
          "size": "1",
          "pos": "23",
          "show": "6",
          "value": "06"
        }
      },
      {
        "$": {
          "name": "ip.checksum",
          "showname": "Header checksum: 0x2bbe [validation disabled]",
          "size": "2",
          "pos": "24",
          "show": "11198",
          "value": "2bbe"
        },
        "field": [
          {
            "$": {
              "name": "ip.checksum_good",
              "showname": "Good: False",
              "size": "2",
              "pos": "24",
              "show": "0",
              "value": "2bbe"
            }
          },
          {
            "$": {
              "name": "ip.checksum_bad",
              "showname": "Bad: False",
              "size": "2",
              "pos": "24",
              "show": "0",
              "value": "2bbe"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.src",
          "showname": "Source: 172.16.253.130 (172.16.253.130)",
          "size": "4",
          "pos": "26",
          "show": "172.16.253.130",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.addr",
          "showname": "Source or Destination Address: 172.16.253.130 (172.16.253.130)",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.16.253.130",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.src_host",
          "showname": "Source Host: 172.16.253.130",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.16.253.130",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.host",
          "showname": "Source or Destination Host: 172.16.253.130",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.16.253.130",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.dst",
          "showname": "Destination: 222.77.70.233 (222.77.70.233)",
          "size": "4",
          "pos": "30",
          "show": "222.77.70.233",
          "value": "de4d46e9"
        }
      },
      {
        "$": {
          "name": "ip.addr",
          "showname": "Source or Destination Address: 222.77.70.233 (222.77.70.233)",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "222.77.70.233",
          "value": "de4d46e9"
        }
      },
      {
        "$": {
          "name": "ip.dst_host",
          "showname": "Destination Host: 222.77.70.233",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "222.77.70.233",
          "value": "de4d46e9"
        }
      },
      {
        "$": {
          "name": "ip.host",
          "showname": "Source or Destination Host: 222.77.70.233",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "222.77.70.233",
          "value": "de4d46e9"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Source GeoIP: Unknown",
          "size": "4",
          "pos": "26",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Destination GeoIP: Unknown",
          "size": "4",
          "pos": "30",
          "value": "de4d46e9"
        }
      }
    ]
  },
  {
    "$": {
      "name": "tcp",
      "showname": "Transmission Control Protocol, Src Port: instl-boots (1067), Dst Port: 8585 (8585), Seq: 0, Len: 0",
      "size": "28",
      "pos": "34"
    },
    "field": [
      {
        "$": {
          "name": "tcp.srcport",
          "showname": "Source port: instl-boots (1067)",
          "size": "2",
          "pos": "34",
          "show": "1067",
          "value": "042b"
        }
      },
      {
        "$": {
          "name": "tcp.dstport",
          "showname": "Destination port: 8585 (8585)",
          "size": "2",
          "pos": "36",
          "show": "8585",
          "value": "2189"
        }
      },
      {
        "$": {
          "name": "tcp.port",
          "showname": "Source or Destination Port: 1067",
          "hide": "yes",
          "size": "2",
          "pos": "34",
          "show": "1067",
          "value": "042b"
        }
      },
      {
        "$": {
          "name": "tcp.port",
          "showname": "Source or Destination Port: 8585",
          "hide": "yes",
          "size": "2",
          "pos": "36",
          "show": "8585",
          "value": "2189"
        }
      },
      {
        "$": {
          "name": "tcp.stream",
          "showname": "Stream index: 0",
          "size": "0",
          "pos": "34",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "tcp.len",
          "showname": "TCP Segment Len: 0",
          "hide": "yes",
          "size": "1",
          "pos": "46",
          "show": "0",
          "value": "70"
        }
      },
      {
        "$": {
          "name": "tcp.seq",
          "showname": "Sequence number: 0    (relative sequence number)",
          "size": "4",
          "pos": "38",
          "show": "0",
          "value": "dddfcebe"
        }
      },
      {
        "$": {
          "name": "tcp.hdr_len",
          "showname": "Header length: 28 bytes",
          "size": "1",
          "pos": "46",
          "show": "28",
          "value": "70"
        }
      },
      {
        "$": {
          "name": "tcp.flags",
          "showname": "Flags: 0x002 (SYN)",
          "size": "2",
          "pos": "46",
          "show": "2",
          "value": "2",
          "unmaskedvalue": "7002"
        },
        "field": [
          {
            "$": {
              "name": "tcp.flags.res",
              "showname": "000. .... .... = Reserved: Not set",
              "size": "1",
              "pos": "46",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "70"
            }
          },
          {
            "$": {
              "name": "tcp.flags.ns",
              "showname": "...0 .... .... = Nonce: Not set",
              "size": "1",
              "pos": "46",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "70"
            }
          },
          {
            "$": {
              "name": "tcp.flags.cwr",
              "showname": ".... 0... .... = Congestion Window Reduced (CWR): Not set",
              "size": "1",
              "pos": "47",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "02"
            }
          },
          {
            "$": {
              "name": "tcp.flags.ecn",
              "showname": ".... .0.. .... = ECN-Echo: Not set",
              "size": "1",
              "pos": "47",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "02"
            }
          },
          {
            "$": {
              "name": "tcp.flags.urg",
              "showname": ".... ..0. .... = Urgent: Not set",
              "size": "1",
              "pos": "47",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "02"
            }
          },
          {
            "$": {
              "name": "tcp.flags.ack",
              "showname": ".... ...0 .... = Acknowledgment: Not set",
              "size": "1",
              "pos": "47",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "02"
            }
          },
          {
            "$": {
              "name": "tcp.flags.push",
              "showname": ".... .... 0... = Push: Not set",
              "size": "1",
              "pos": "47",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "02"
            }
          },
          {
            "$": {
              "name": "tcp.flags.reset",
              "showname": ".... .... .0.. = Reset: Not set",
              "size": "1",
              "pos": "47",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "02"
            }
          },
          {
            "$": {
              "name": "tcp.flags.syn",
              "showname": ".... .... ..1. = Syn: Set",
              "size": "1",
              "pos": "47",
              "show": "1",
              "value": "1",
              "unmaskedvalue": "02"
            },
            "field": [
              {
                "$": {
                  "name": "expert",
                  "showname": "Expert Info (Chat/Sequence): Connection establish request (SYN): server port 8585",
                  "size": "0",
                  "pos": "47"
                },
                "field": [
                  {
                    "$": {
                      "name": "expert.message",
                      "showname": "Message: Connection establish request (SYN): server port 8585",
                      "size": "0",
                      "pos": "0",
                      "show": "Connection establish request (SYN): server port 8585"
                    }
                  },
                  {
                    "$": {
                      "name": "expert.severity",
                      "showname": "Severity level: Chat",
                      "size": "0",
                      "pos": "0",
                      "show": "2097152"
                    }
                  },
                  {
                    "$": {
                      "name": "expert.group",
                      "showname": "Group: Sequence",
                      "size": "0",
                      "pos": "0",
                      "show": "33554432"
                    }
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "name": "tcp.flags.fin",
              "showname": ".... .... ...0 = Fin: Not set",
              "size": "1",
              "pos": "47",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "02"
            }
          }
        ]
      },
      {
        "$": {
          "name": "tcp.window_size_value",
          "showname": "Window size value: 64240",
          "size": "2",
          "pos": "48",
          "show": "64240",
          "value": "faf0"
        }
      },
      {
        "$": {
          "name": "tcp.window_size",
          "showname": "Calculated window size: 64240",
          "size": "2",
          "pos": "48",
          "show": "64240",
          "value": "faf0"
        }
      },
      {
        "$": {
          "name": "tcp.checksum",
          "showname": "Checksum: 0xe711 [validation disabled]",
          "size": "2",
          "pos": "50",
          "show": "59153",
          "value": "e711"
        },
        "field": [
          {
            "$": {
              "name": "tcp.checksum_good",
              "showname": "Good Checksum: False",
              "size": "2",
              "pos": "50",
              "show": "0",
              "value": "e711"
            }
          },
          {
            "$": {
              "name": "tcp.checksum_bad",
              "showname": "Bad Checksum: False",
              "size": "2",
              "pos": "50",
              "show": "0",
              "value": "e711"
            }
          }
        ]
      },
      {
        "$": {
          "name": "tcp.options",
          "showname": "Options: (8 bytes), Maximum segment size, No-Operation (NOP), No-Operation (NOP), SACK permitted",
          "size": "8",
          "pos": "54",
          "show": "02:04:05:b4:01:01:04:02",
          "value": "020405b401010402"
        },
        "field": [
          {
            "$": {
              "name": "tcp.options.mss",
              "showname": "Maximum segment size: 1460 bytes",
              "size": "4",
              "pos": "54",
              "show": "",
              "value": ""
            },
            "field": [
              {
                "$": {
                  "name": "tcp.option_kind",
                  "showname": "Kind: MSS size (2)",
                  "size": "1",
                  "pos": "54",
                  "show": "2",
                  "value": "02"
                }
              },
              {
                "$": {
                  "name": "tcp.option_len",
                  "showname": "Length: 4",
                  "size": "1",
                  "pos": "55",
                  "show": "4",
                  "value": "04"
                }
              },
              {
                "$": {
                  "name": "tcp.options.mss_val",
                  "showname": "MSS Value: 1460",
                  "size": "2",
                  "pos": "56",
                  "show": "1460",
                  "value": "05b4"
                }
              }
            ]
          },
          {
            "$": {
              "name": "",
              "show": "No-Operation (NOP)",
              "size": "1",
              "pos": "58",
              "value": "01"
            },
            "field": [
              {
                "$": {
                  "name": "tcp.options.type",
                  "showname": "Type: 1",
                  "size": "1",
                  "pos": "58",
                  "show": "1",
                  "value": "01"
                },
                "field": [
                  {
                    "$": {
                      "name": "tcp.options.type.copy",
                      "showname": "0... .... = Copy on fragmentation: No",
                      "size": "1",
                      "pos": "58",
                      "show": "0",
                      "value": "0",
                      "unmaskedvalue": "01"
                    }
                  },
                  {
                    "$": {
                      "name": "tcp.options.type.class",
                      "showname": ".00. .... = Class: Control (0)",
                      "size": "1",
                      "pos": "58",
                      "show": "0",
                      "value": "0",
                      "unmaskedvalue": "01"
                    }
                  },
                  {
                    "$": {
                      "name": "tcp.options.type.number",
                      "showname": "...0 0001 = Number: No-Operation (NOP) (1)",
                      "size": "1",
                      "pos": "58",
                      "show": "1",
                      "value": "1",
                      "unmaskedvalue": "01"
                    }
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "name": "",
              "show": "No-Operation (NOP)",
              "size": "1",
              "pos": "59",
              "value": "01"
            },
            "field": [
              {
                "$": {
                  "name": "tcp.options.type",
                  "showname": "Type: 1",
                  "size": "1",
                  "pos": "59",
                  "show": "1",
                  "value": "01"
                },
                "field": [
                  {
                    "$": {
                      "name": "tcp.options.type.copy",
                      "showname": "0... .... = Copy on fragmentation: No",
                      "size": "1",
                      "pos": "59",
                      "show": "0",
                      "value": "0",
                      "unmaskedvalue": "01"
                    }
                  },
                  {
                    "$": {
                      "name": "tcp.options.type.class",
                      "showname": ".00. .... = Class: Control (0)",
                      "size": "1",
                      "pos": "59",
                      "show": "0",
                      "value": "0",
                      "unmaskedvalue": "01"
                    }
                  },
                  {
                    "$": {
                      "name": "tcp.options.type.number",
                      "showname": "...0 0001 = Number: No-Operation (NOP) (1)",
                      "size": "1",
                      "pos": "59",
                      "show": "1",
                      "value": "1",
                      "unmaskedvalue": "01"
                    }
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "name": "tcp.options.sack_perm",
              "showname": "TCP SACK Permitted Option: True",
              "size": "2",
              "pos": "60",
              "show": "1",
              "value": "0402"
            },
            "field": [
              {
                "$": {
                  "name": "tcp.option_kind",
                  "showname": "Kind: SACK Permission (4)",
                  "size": "1",
                  "pos": "60",
                  "show": "4",
                  "value": "04"
                }
              },
              {
                "$": {
                  "name": "tcp.option_len",
                  "showname": "Length: 2",
                  "size": "1",
                  "pos": "61",
                  "show": "2",
                  "value": "02"
                }
              }
            ]
          }
        ]
      }
    ]
  }
],
"hexPacket": [ "03", "00", "5e", "00", "00", "16", "00", "0c",
"29", "af", "9c", "dc", "08", "00", "46", "00", "00", "28", "00", "2b", "00", "00", "01", "02",
"9a", "fb", "ac", "10", "fd", "82", "e0", "00", "00", "16", "94", "04", "00", "00", "22", "00",
"eb", "03", "00", "00", "00", "01", "03", "00", "00", "00", "ef", "ff", "ff", "fa"]
},{
"proto": [
  {
    "$": {
      "name": "geninfo",
      "pos": "0",
      "showname": "General information",
      "size": "54"
    },
    "field": [
      {
        "$": {
          "name": "num",
          "pos": "0",
          "show": "1",
          "showname": "Number",
          "value": "1",
          "size": "54"
        }
      },
      {
        "$": {
          "name": "len",
          "pos": "0",
          "show": "54",
          "showname": "Frame Length",
          "value": "36",
          "size": "54"
        }
      },
      {
        "$": {
          "name": "caplen",
          "pos": "0",
          "show": "54",
          "showname": "Captured Length",
          "value": "36",
          "size": "54"
        }
      },
      {
        "$": {
          "name": "timestamp",
          "pos": "0",
          "show": "Feb  3, 2013 20:49:19.524111000 CST",
          "showname": "Captured Time",
          "value": "1359946159.524111000",
          "size": "54"
        }
      }
    ]
  },
  {
    "$": {
      "name": "frame",
      "showname": "Frame 1: 54 bytes on wire (432 bits), 54 bytes captured (432 bits) on interface 0",
      "size": "54",
      "pos": "0"
    },
    "field": [
      {
        "$": {
          "name": "frame.interface_id",
          "showname": "Interface id: 0",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.encap_type",
          "showname": "Encapsulation type: Ethernet (1)",
          "size": "0",
          "pos": "0",
          "show": "1"
        }
      },
      {
        "$": {
          "name": "frame.time",
          "showname": "Arrival Time: Feb  3, 2013 20:49:19.524111000 CST",
          "size": "0",
          "pos": "0",
          "show": "\"Feb  3, 2013 20:49:19.524111000 CST\""
        }
      },
      {
        "$": {
          "name": "frame.offset_shift",
          "showname": "Time shift for this packet: 0.000000000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000000000"
        }
      },
      {
        "$": {
          "name": "frame.time_epoch",
          "showname": "Epoch Time: 1359946159.524111000 seconds",
          "size": "0",
          "pos": "0",
          "show": "1359946159.524111000"
        }
      },
      {
        "$": {
          "name": "frame.time_delta",
          "showname": "Time delta from previous captured frame: 0.000000000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000000000"
        }
      },
      {
        "$": {
          "name": "frame.time_delta_displayed",
          "showname": "Time delta from previous displayed frame: 0.000000000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000000000"
        }
      },
      {
        "$": {
          "name": "frame.time_relative",
          "showname": "Time since reference or first frame: 0.000000000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000000000"
        }
      },
      {
        "$": {
          "name": "frame.number",
          "showname": "Frame Number: 1",
          "size": "0",
          "pos": "0",
          "show": "1"
        }
      },
      {
        "$": {
          "name": "frame.len",
          "showname": "Frame Length: 54 bytes (432 bits)",
          "size": "0",
          "pos": "0",
          "show": "54"
        }
      },
      {
        "$": {
          "name": "frame.cap_len",
          "showname": "Capture Length: 54 bytes (432 bits)",
          "size": "0",
          "pos": "0",
          "show": "54"
        }
      },
      {
        "$": {
          "name": "frame.marked",
          "showname": "Frame is marked: False",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.ignored",
          "showname": "Frame is ignored: False",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.protocols",
          "showname": "Protocols in frame: eth:ip:igmp",
          "size": "0",
          "pos": "0",
          "show": "eth:ip:igmp"
        }
      }
    ]
  },
  {
    "$": {
      "name": "eth",
      "showname": "Ethernet II, Src: Vmware_af:9c:dc (00:0c:29:af:9c:dc), Dst: IPv4mcast_00:00:16 (01:00:5e:00:00:16)",
      "size": "14",
      "pos": "0"
    },
    "field": [
      {
        "$": {
          "name": "eth.dst",
          "showname": "Destination: IPv4mcast_00:00:16 (01:00:5e:00:00:16)",
          "size": "6",
          "pos": "0",
          "show": "01:00:5e:00:00:16",
          "value": "01005e000016"
        },
        "field": [
          {
            "$": {
              "name": "eth.addr",
              "showname": "Address: IPv4mcast_00:00:16 (01:00:5e:00:00:16)",
              "size": "6",
              "pos": "0",
              "show": "01:00:5e:00:00:16",
              "value": "01005e000016"
            }
          },
          {
            "$": {
              "name": "eth.lg",
              "showname": ".... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)",
              "size": "3",
              "pos": "0",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "01005e"
            }
          },
          {
            "$": {
              "name": "eth.ig",
              "showname": ".... ...1 .... .... .... .... = IG bit: Group address (multicast/broadcast)",
              "size": "3",
              "pos": "0",
              "show": "1",
              "value": "1",
              "unmaskedvalue": "01005e"
            }
          }
        ]
      },
      {
        "$": {
          "name": "eth.src",
          "showname": "Source: Vmware_af:9c:dc (00:0c:29:af:9c:dc)",
          "size": "6",
          "pos": "6",
          "show": "00:0c:29:af:9c:dc",
          "value": "000c29af9cdc"
        },
        "field": [
          {
            "$": {
              "name": "eth.addr",
              "showname": "Address: Vmware_af:9c:dc (00:0c:29:af:9c:dc)",
              "size": "6",
              "pos": "6",
              "show": "00:0c:29:af:9c:dc",
              "value": "000c29af9cdc"
            }
          },
          {
            "$": {
              "name": "eth.lg",
              "showname": ".... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)",
              "size": "3",
              "pos": "6",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "000c29"
            }
          },
          {
            "$": {
              "name": "eth.ig",
              "showname": ".... ...0 .... .... .... .... = IG bit: Individual address (unicast)",
              "size": "3",
              "pos": "6",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "000c29"
            }
          }
        ]
      },
      {
        "$": {
          "name": "eth.type",
          "showname": "Type: IP (0x0800)",
          "size": "2",
          "pos": "12",
          "show": "2048",
          "value": "0800"
        }
      }
    ]
  },
  {
    "$": {
      "name": "ip",
      "showname": "Internet Protocol Version 4, Src: 172.16.253.130 (172.16.253.130), Dst: 224.0.0.22 (224.0.0.22)",
      "size": "24",
      "pos": "14"
    },
    "field": [
      {
        "$": {
          "name": "ip.version",
          "showname": "Version: 4",
          "size": "1",
          "pos": "14",
          "show": "4",
          "value": "46"
        }
      },
      {
        "$": {
          "name": "ip.hdr_len",
          "showname": "Header length: 24 bytes",
          "size": "1",
          "pos": "14",
          "show": "24",
          "value": "46"
        }
      },
      {
        "$": {
          "name": "ip.dsfield",
          "showname": "Differentiated Services Field: 0x00 (DSCP 0x00: Default; ECN: 0x00: Not-ECT (Not ECN-Capable Transport))",
          "size": "1",
          "pos": "15",
          "show": "0",
          "value": "00"
        },
        "field": [
          {
            "$": {
              "name": "ip.dsfield.dscp",
              "showname": "0000 00.. = Differentiated Services Codepoint: Default (0x00)",
              "size": "1",
              "pos": "15",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "00"
            }
          },
          {
            "$": {
              "name": "ip.dsfield.ecn",
              "showname": ".... ..00 = Explicit Congestion Notification: Not-ECT (Not ECN-Capable Transport) (0x00)",
              "size": "1",
              "pos": "15",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "00"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.len",
          "showname": "Total Length: 40",
          "size": "2",
          "pos": "16",
          "show": "40",
          "value": "0028"
        }
      },
      {
        "$": {
          "name": "ip.id",
          "showname": "Identification: 0x002b (43)",
          "size": "2",
          "pos": "18",
          "show": "43",
          "value": "002b"
        }
      },
      {
        "$": {
          "name": "ip.flags",
          "showname": "Flags: 0x00",
          "size": "1",
          "pos": "20",
          "show": "0",
          "value": "00"
        },
        "field": [
          {
            "$": {
              "name": "ip.flags.rb",
              "showname": "0... .... = Reserved bit: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "00"
            }
          },
          {
            "$": {
              "name": "ip.flags.df",
              "showname": ".0.. .... = Don't fragment: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "00"
            }
          },
          {
            "$": {
              "name": "ip.flags.mf",
              "showname": "..0. .... = More fragments: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "00"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.frag_offset",
          "showname": "Fragment offset: 0",
          "size": "2",
          "pos": "20",
          "show": "0",
          "value": "0000"
        }
      },
      {
        "$": {
          "name": "ip.ttl",
          "showname": "Time to live: 1",
          "size": "1",
          "pos": "22",
          "show": "1",
          "value": "01"
        }
      },
      {
        "$": {
          "name": "ip.proto",
          "showname": "Protocol: IGMP (2)",
          "size": "1",
          "pos": "23",
          "show": "2",
          "value": "02"
        }
      },
      {
        "$": {
          "name": "ip.checksum",
          "showname": "Header checksum: 0x9afb [validation disabled]",
          "size": "2",
          "pos": "24",
          "show": "39675",
          "value": "9afb"
        },
        "field": [
          {
            "$": {
              "name": "ip.checksum_good",
              "showname": "Good: False",
              "size": "2",
              "pos": "24",
              "show": "0",
              "value": "9afb"
            }
          },
          {
            "$": {
              "name": "ip.checksum_bad",
              "showname": "Bad: False",
              "size": "2",
              "pos": "24",
              "show": "0",
              "value": "9afb"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.src",
          "showname": "Source: 172.16.253.130 (172.16.253.130)",
          "size": "4",
          "pos": "26",
          "show": "172.16.253.130",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.addr",
          "showname": "Source or Destination Address: 172.16.253.130 (172.16.253.130)",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.16.253.130",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.src_host",
          "showname": "Source Host: 172.16.253.130",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.16.253.130",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.host",
          "showname": "Source or Destination Host: 172.16.253.130",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.16.253.130",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.dst",
          "showname": "Destination: 224.0.0.22 (224.0.0.22)",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "ip.addr",
          "showname": "Source or Destination Address: 224.0.0.22 (224.0.0.22)",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "ip.dst_host",
          "showname": "Destination Host: 224.0.0.22",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "ip.host",
          "showname": "Source or Destination Host: 224.0.0.22",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Source GeoIP: Unknown",
          "size": "4",
          "pos": "26",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Destination GeoIP: Unknown",
          "size": "4",
          "pos": "30",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Options: (4 bytes), Router Alert",
          "size": "4",
          "pos": "34",
          "value": "94040000"
        },
        "field": [
          {
            "$": {
              "name": "",
              "show": "Router Alert (4 bytes): Router shall examine packet (0)",
              "size": "4",
              "pos": "34",
              "value": "94040000"
            },
            "field": [
              {
                "$": {
                  "name": "ip.opt.type",
                  "showname": "Type: 148",
                  "size": "1",
                  "pos": "34",
                  "show": "148",
                  "value": "94"
                },
                "field": [
                  {
                    "$": {
                      "name": "ip.opt.type.copy",
                      "showname": "1... .... = Copy on fragmentation: Yes",
                      "size": "1",
                      "pos": "34",
                      "show": "1",
                      "value": "1",
                      "unmaskedvalue": "94"
                    }
                  },
                  {
                    "$": {
                      "name": "ip.opt.type.class",
                      "showname": ".00. .... = Class: Control (0)",
                      "size": "1",
                      "pos": "34",
                      "show": "0",
                      "value": "0",
                      "unmaskedvalue": "94"
                    }
                  },
                  {
                    "$": {
                      "name": "ip.opt.type.number",
                      "showname": "...1 0100 = Number: Router Alert (20)",
                      "size": "1",
                      "pos": "34",
                      "show": "20",
                      "value": "14",
                      "unmaskedvalue": "94"
                    }
                  }
                ]
              },
              {
                "$": {
                  "name": "ip.opt.len",
                  "showname": "Length: 4",
                  "size": "1",
                  "pos": "35",
                  "show": "4",
                  "value": "04"
                }
              },
              {
                "$": {
                  "name": "ip.opt.ra",
                  "showname": "Router Alert: Router shall examine packet (0)",
                  "size": "2",
                  "pos": "36",
                  "show": "0",
                  "value": "0000"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "$": {
      "name": "igmp",
      "showname": "Internet Group Management Protocol",
      "size": "16",
      "pos": "38"
    },
    "field": [
      {
        "$": {
          "name": "igmp.version",
          "showname": "IGMP Version: 3",
          "size": "0",
          "pos": "38",
          "show": "3"
        }
      },
      {
        "$": {
          "name": "igmp.type",
          "showname": "Type: Membership Report (0x22)",
          "size": "1",
          "pos": "38",
          "show": "34",
          "value": "22"
        }
      },
      {
        "$": {
          "name": "igmp.checksum",
          "showname": "Header checksum: 0xeb03 [correct]",
          "size": "2",
          "pos": "40",
          "show": "60163",
          "value": "eb03"
        }
      },
      {
        "$": {
          "name": "igmp.num_grp_recs",
          "showname": "Num Group Records: 1",
          "size": "2",
          "pos": "44",
          "show": "1",
          "value": "0001"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Group Record : 239.255.255.250  Change To Include Mode",
          "size": "8",
          "pos": "46",
          "value": "03000000effffffa"
        },
        "field": [
          {
            "$": {
              "name": "igmp.record_type",
              "showname": "Record Type: Change To Include Mode (3)",
              "size": "1",
              "pos": "46",
              "show": "3",
              "value": "03"
            }
          },
          {
            "$": {
              "name": "igmp.aux_data_len",
              "showname": "Aux Data Len: 0",
              "size": "1",
              "pos": "47",
              "show": "0",
              "value": "00"
            }
          },
          {
            "$": {
              "name": "igmp.num_src",
              "showname": "Num Src: 0",
              "size": "2",
              "pos": "48",
              "show": "0",
              "value": "0000"
            }
          },
          {
            "$": {
              "name": "igmp.maddr",
              "showname": "Multicast Address: 239.255.255.250 (239.255.255.250)",
              "size": "4",
              "pos": "50",
              "show": "239.255.255.250",
              "value": "effffffa"
            }
          }
        ]
      }
    ]
  }
],
"hexPacket": [ "01", "00", "5e", "00", "00", "16", "00", "0c",
"29", "af", "9c", "dc", "08", "00", "46", "00", "00", "28", "00", "2b", "00", "00", "01", "02",
"9a", "fb", "ac", "10", "fd", "82", "e0", "00", "00", "16", "94", "04", "00", "00", "22", "00",
"eb", "03", "00", "00", "00", "01", "03", "00", "00", "00", "ef", "ff", "ff", "fa"]
},
{
"proto": [
  {
    "$": {
      "name": "geninfo",
      "pos": "0",
      "showname": "General information",
      "size": "54"
    },
    "field": [
      {
        "$": {
          "name": "num",
          "pos": "0",
          "show": "2",
          "showname": "Number",
          "value": "2",
          "size": "54"
        }
      },
      {
        "$": {
          "name": "len",
          "pos": "0",
          "show": "54",
          "showname": "Frame Length",
          "value": "36",
          "size": "54"
        }
      },
      {
        "$": {
          "name": "caplen",
          "pos": "0",
          "show": "54",
          "showname": "Captured Length",
          "value": "36",
          "size": "54"
        }
      },
      {
        "$": {
          "name": "timestamp",
          "pos": "0",
          "show": "Feb  3, 2013 20:49:19.528804000 CST",
          "showname": "Captured Time",
          "value": "1359946159.528804000",
          "size": "54"
        }
      }
    ]
  },
  {
    "$": {
      "name": "frame",
      "showname": "Frame 2: 54 bytes on wire (432 bits), 54 bytes captured (432 bits) on interface 0",
      "size": "54",
      "pos": "0"
    },
    "field": [
      {
        "$": {
          "name": "frame.interface_id",
          "showname": "Interface id: 0",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.encap_type",
          "showname": "Encapsulation type: Ethernet (1)",
          "size": "0",
          "pos": "0",
          "show": "1"
        }
      },
      {
        "$": {
          "name": "frame.time",
          "showname": "Arrival Time: Feb  3, 2013 20:49:19.528804000 CST",
          "size": "0",
          "pos": "0",
          "show": "\"Feb  3, 2013 20:49:19.528804000 CST\""
        }
      },
      {
        "$": {
          "name": "frame.offset_shift",
          "showname": "Time shift for this packet: 0.000000000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.000000000"
        }
      },
      {
        "$": {
          "name": "frame.time_epoch",
          "showname": "Epoch Time: 1359946159.528804000 seconds",
          "size": "0",
          "pos": "0",
          "show": "1359946159.528804000"
        }
      },
      {
        "$": {
          "name": "frame.time_delta",
          "showname": "Time delta from previous captured frame: 0.004693000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.004693000"
        }
      },
      {
        "$": {
          "name": "frame.time_delta_displayed",
          "showname": "Time delta from previous displayed frame: 0.004693000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.004693000"
        }
      },
      {
        "$": {
          "name": "frame.time_relative",
          "showname": "Time since reference or first frame: 0.004693000 seconds",
          "size": "0",
          "pos": "0",
          "show": "0.004693000"
        }
      },
      {
        "$": {
          "name": "frame.number",
          "showname": "Frame Number: 2",
          "size": "0",
          "pos": "0",
          "show": "2"
        }
      },
      {
        "$": {
          "name": "frame.len",
          "showname": "Frame Length: 54 bytes (432 bits)",
          "size": "0",
          "pos": "0",
          "show": "54"
        }
      },
      {
        "$": {
          "name": "frame.cap_len",
          "showname": "Capture Length: 54 bytes (432 bits)",
          "size": "0",
          "pos": "0",
          "show": "54"
        }
      },
      {
        "$": {
          "name": "frame.marked",
          "showname": "Frame is marked: False",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.ignored",
          "showname": "Frame is ignored: False",
          "size": "0",
          "pos": "0",
          "show": "0"
        }
      },
      {
        "$": {
          "name": "frame.protocols",
          "showname": "Protocols in frame: eth:ip:igmp",
          "size": "0",
          "pos": "0",
          "show": "eth:ip:igmp"
        }
      }
    ]
  },
  {
    "$": {
      "name": "eth",
      "showname": "Ethernet II, Src: Vmware_af:9c:dc (00:0c:29:af:9c:dc), Dst: IPv4mcast_00:00:16 (01:00:5e:00:00:16)",
      "size": "14",
      "pos": "0"
    },
    "field": [
      {
        "$": {
          "name": "eth.dst",
          "showname": "Destination: IPv4mcast_00:00:16 (01:00:5e:00:00:16)",
          "size": "6",
          "pos": "0",
          "show": "01:00:5e:00:00:16",
          "value": "01005e000016"
        },
        "field": [
          {
            "$": {
              "name": "eth.addr",
              "showname": "Address: IPv4mcast_00:00:16 (01:00:5e:00:00:16)",
              "size": "6",
              "pos": "0",
              "show": "01:00:5e:00:00:16",
              "value": "01005e000016"
            }
          },
          {
            "$": {
              "name": "eth.lg",
              "showname": ".... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)",
              "size": "3",
              "pos": "0",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "01005e"
            }
          },
          {
            "$": {
              "name": "eth.ig",
              "showname": ".... ...1 .... .... .... .... = IG bit: Group address (multicast/broadcast)",
              "size": "3",
              "pos": "0",
              "show": "1",
              "value": "1",
              "unmaskedvalue": "01005e"
            }
          }
        ]
      },
      {
        "$": {
          "name": "eth.src",
          "showname": "Source: Vmware_af:9c:dc (00:0c:29:af:9c:dc)",
          "size": "6",
          "pos": "6",
          "show": "00:0c:29:af:9c:dc",
          "value": "000c29af9cdc"
        },
        "field": [
          {
            "$": {
              "name": "eth.addr",
              "showname": "Address: Vmware_af:9c:dc (00:0c:29:af:9c:dc)",
              "size": "6",
              "pos": "6",
              "show": "00:0c:29:af:9c:dc",
              "value": "000c29af9cdc"
            }
          },
          {
            "$": {
              "name": "eth.lg",
              "showname": ".... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)",
              "size": "3",
              "pos": "6",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "000c29"
            }
          },
          {
            "$": {
              "name": "eth.ig",
              "showname": ".... ...0 .... .... .... .... = IG bit: Individual address (unicast)",
              "size": "3",
              "pos": "6",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "000c29"
            }
          }
        ]
      },
      {
        "$": {
          "name": "eth.type",
          "showname": "Type: IP (0x0800)",
          "size": "2",
          "pos": "12",
          "show": "2048",
          "value": "0800"
        }
      }
    ]
  },
  {
    "$": {
      "name": "ip",
      "showname": "Internet Protocol Version 4, Src: 172.45.221.412 (172.45.221.412), Dst: 224.0.0.22 (224.0.0.22)",
      "size": "24",
      "pos": "14"
    },
    "field": [
      {
        "$": {
          "name": "ip.version",
          "showname": "Version: 4",
          "size": "1",
          "pos": "14",
          "show": "4",
          "value": "46"
        }
      },
      {
        "$": {
          "name": "ip.hdr_len",
          "showname": "Header length: 24 bytes",
          "size": "1",
          "pos": "14",
          "show": "24",
          "value": "46"
        }
      },
      {
        "$": {
          "name": "ip.dsfield",
          "showname": "Differentiated Services Field: 0x00 (DSCP 0x00: Default; ECN: 0x00: Not-ECT (Not ECN-Capable Transport))",
          "size": "1",
          "pos": "15",
          "show": "0",
          "value": "00"
        },
        "field": [
          {
            "$": {
              "name": "ip.dsfield.dscp",
              "showname": "0000 00.. = Differentiated Services Codepoint: Default (0x00)",
              "size": "1",
              "pos": "15",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "00"
            }
          },
          {
            "$": {
              "name": "ip.dsfield.ecn",
              "showname": ".... ..00 = Explicit Congestion Notification: Not-ECT (Not ECN-Capable Transport) (0x00)",
              "size": "1",
              "pos": "15",
              "show": "0",
              "value": "0",
              "unmaskedvalue": "00"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.len",
          "showname": "Total Length: 40",
          "size": "2",
          "pos": "16",
          "show": "40",
          "value": "0028"
        }
      },
      {
        "$": {
          "name": "ip.id",
          "showname": "Identification: 0x002c (44)",
          "size": "2",
          "pos": "18",
          "show": "44",
          "value": "002c"
        }
      },
      {
        "$": {
          "name": "ip.flags",
          "showname": "Flags: 0x00",
          "size": "1",
          "pos": "20",
          "show": "0",
          "value": "00"
        },
        "field": [
          {
            "$": {
              "name": "ip.flags.rb",
              "showname": "0... .... = Reserved bit: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "00"
            }
          },
          {
            "$": {
              "name": "ip.flags.df",
              "showname": ".0.. .... = Don't fragment: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "00"
            }
          },
          {
            "$": {
              "name": "ip.flags.mf",
              "showname": "..0. .... = More fragments: Not set",
              "size": "1",
              "pos": "20",
              "show": "0",
              "value": "00"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.frag_offset",
          "showname": "Fragment offset: 0",
          "size": "2",
          "pos": "20",
          "show": "0",
          "value": "0000"
        }
      },
      {
        "$": {
          "name": "ip.ttl",
          "showname": "Time to live: 1",
          "size": "1",
          "pos": "22",
          "show": "1",
          "value": "01"
        }
      },
      {
        "$": {
          "name": "ip.proto",
          "showname": "Protocol: IGMP (2)",
          "size": "1",
          "pos": "23",
          "show": "2",
          "value": "02"
        }
      },
      {
        "$": {
          "name": "ip.checksum",
          "showname": "Header checksum: 0x9afa [validation disabled]",
          "size": "2",
          "pos": "24",
          "show": "39674",
          "value": "9afa"
        },
        "field": [
          {
            "$": {
              "name": "ip.checksum_good",
              "showname": "Good: False",
              "size": "2",
              "pos": "24",
              "show": "0",
              "value": "9afa"
            }
          },
          {
            "$": {
              "name": "ip.checksum_bad",
              "showname": "Bad: False",
              "size": "2",
              "pos": "24",
              "show": "0",
              "value": "9afa"
            }
          }
        ]
      },
      {
        "$": {
          "name": "ip.src",
          "showname": "Source: 172.45.221.412 (172.45.221.412)",
          "size": "4",
          "pos": "26",
          "show": "172.45.221.412",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.addr",
          "showname": "Source or Destination Address: 172.45.221.412 (172.45.221.412)",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.45.221.412",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.src_host",
          "showname": "Source Host: 172.45.221.412",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.45.221.412",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.host",
          "showname": "Source or Destination Host: 172.45.221.412",
          "hide": "yes",
          "size": "4",
          "pos": "26",
          "show": "172.45.221.412",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "ip.dst",
          "showname": "Destination: 224.0.0.22 (224.0.0.22)",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "ip.addr",
          "showname": "Source or Destination Address: 224.0.0.22 (224.0.0.22)",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "ip.dst_host",
          "showname": "Destination Host: 224.0.0.22",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "ip.host",
          "showname": "Source or Destination Host: 224.0.0.22",
          "hide": "yes",
          "size": "4",
          "pos": "30",
          "show": "224.0.0.22",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Source GeoIP: Unknown",
          "size": "4",
          "pos": "26",
          "value": "ac10fd82"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Destination GeoIP: Unknown",
          "size": "4",
          "pos": "30",
          "value": "e0000016"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Options: (4 bytes), Router Alert",
          "size": "4",
          "pos": "34",
          "value": "94040000"
        },
        "field": [
          {
            "$": {
              "name": "",
              "show": "Router Alert (4 bytes): Router shall examine packet (0)",
              "size": "4",
              "pos": "34",
              "value": "94040000"
            },
            "field": [
              {
                "$": {
                  "name": "ip.opt.type",
                  "showname": "Type: 148",
                  "size": "1",
                  "pos": "34",
                  "show": "148",
                  "value": "94"
                },
                "field": [
                  {
                    "$": {
                      "name": "ip.opt.type.copy",
                      "showname": "1... .... = Copy on fragmentation: Yes",
                      "size": "1",
                      "pos": "34",
                      "show": "1",
                      "value": "1",
                      "unmaskedvalue": "94"
                    }
                  },
                  {
                    "$": {
                      "name": "ip.opt.type.class",
                      "showname": ".00. .... = Class: Control (0)",
                      "size": "1",
                      "pos": "34",
                      "show": "0",
                      "value": "0",
                      "unmaskedvalue": "94"
                    }
                  },
                  {
                    "$": {
                      "name": "ip.opt.type.number",
                      "showname": "...1 0100 = Number: Router Alert (20)",
                      "size": "1",
                      "pos": "34",
                      "show": "20",
                      "value": "14",
                      "unmaskedvalue": "94"
                    }
                  }
                ]
              },
              {
                "$": {
                  "name": "ip.opt.len",
                  "showname": "Length: 4",
                  "size": "1",
                  "pos": "35",
                  "show": "4",
                  "value": "04"
                }
              },
              {
                "$": {
                  "name": "ip.opt.ra",
                  "showname": "Router Alert: Router shall examine packet (0)",
                  "size": "2",
                  "pos": "36",
                  "show": "0",
                  "value": "0000"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "$": {
      "name": "igmp",
      "showname": "Internet Group Management Protocol",
      "size": "16",
      "pos": "38"
    },
    "field": [
      {
        "$": {
          "name": "igmp.version",
          "showname": "IGMP Version: 3",
          "size": "0",
          "pos": "38",
          "show": "3"
        }
      },
      {
        "$": {
          "name": "igmp.type",
          "showname": "Type: Membership Report (0x22)",
          "size": "1",
          "pos": "38",
          "show": "34",
          "value": "22"
        }
      },
      {
        "$": {
          "name": "igmp.checksum",
          "showname": "Header checksum: 0xea03 [correct]",
          "size": "2",
          "pos": "40",
          "show": "59907",
          "value": "ea03"
        }
      },
      {
        "$": {
          "name": "igmp.num_grp_recs",
          "showname": "Num Group Records: 1",
          "size": "2",
          "pos": "44",
          "show": "1",
          "value": "0001"
        }
      },
      {
        "$": {
          "name": "",
          "show": "Group Record : 239.255.255.250  Change To Exclude Mode",
          "size": "8",
          "pos": "46",
          "value": "04000000effffffa"
        },
        "field": [
          {
            "$": {
              "name": "igmp.record_type",
              "showname": "Record Type: Change To Exclude Mode (4)",
              "size": "1",
              "pos": "46",
              "show": "4",
              "value": "04"
            }
          },
          {
            "$": {
              "name": "igmp.aux_data_len",
              "showname": "Aux Data Len: 0",
              "size": "1",
              "pos": "47",
              "show": "0",
              "value": "00"
            }
          },
          {
            "$": {
              "name": "igmp.num_src",
              "showname": "Num Src: 0",
              "size": "2",
              "pos": "48",
              "show": "0",
              "value": "0000"
            }
          },
          {
            "$": {
              "name": "igmp.maddr",
              "showname": "Multicast Address: 239.255.255.250 (239.255.255.250)",
              "size": "4",
              "pos": "50",
              "show": "239.255.255.250",
              "value": "effffffa"
            }
          }
        ]
      }
    ]
  }
],
"hexPacket": [ "02", "00", "5e", "00", "00", "16", "00", "0c",
"29", "af", "9c", "dc", "08", "00", "46", "00", "00", "28", "00", "2b", "00", "00", "01", "02",
"9a", "fb", "ac", "10", "fd", "82", "e0", "00", "00", "16", "94", "04", "00", "00", "22", "00",
"eb", "03", "00", "00", "00", "01", "03", "00", "00", "00", "ef", "ff", "ff", "fa"]
}
]
}
};
// end Packets JSON object

/** @scratch /panels/5
 *
 * include::panels/pcap.asciidoc[]
 */

/** @scratch /panels/pcap/0
 * == pcap
 * Status: *Stable*
 *
 * The pcap panel is used for displaying static pcap formated as markdown, sanitized html or as plain
 * pcap.
 *
 */
define([
  'angular',
  'app',
  'lodash',
  'require',
  'jquery',
  'searchhighlight'
],
function (angular, app, _, require) {
  'use strict';

  var module = angular.module('kibana.panels.pcap', []);
  app.useModule(module);

  module.controller('pcap', function($scope, $http) {
    $scope.panelMeta = {
      status  : "Stable",
      description : "A static pcap panel that can use plain pcap, markdown, or (sanitized) HTML"
    };

    // Set and populate defaults
    var _d = {
      /** @scratch /panels/pcap/5
       *
       * === Parameters
       *
       * mode:: `html', `markdown' or `pcap'
       */
      mode    : "markdown", // 'html','markdown','pcap'
      /** @scratch /panels/pcap/5
       * content:: The content of your panel, written in the mark up specified in +mode+
       */
      content : "",
      style: {'font-size': '9px'},
    };
    _.defaults($scope.panel,_d);

    $scope.init = function() {
      $scope.ready = false;

      $scope.$on('refresh',function(){$scope.get_data();}); //
      $scope.get_data();
      //$scope.map_bytes();
    };

    // Show Second Level Details
    $scope.toggle_details = function(row) {
      row.details = row.details ? false : true;
      row.view = row.view || 'table';
      console.log(row);
      console.log('row.details = ', row.details);
      //$(this).find('i').addClass('fa-rotate-90');
     // $(this).find('.toggle-arrow').html('v');
    };

    $scope.toggleDetail = function($index) {
        $scope.isVisible = $scope.isVisible == 0 ? true : false;
        $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
    };

    // Highlight the 3rd Level Data
    $scope.highlight_text = function(row) {
      // TODO: Pass in the event/row
      // var val = $(this).val();
      var val = 'd4c3 b2a1 0200';
      var options = {
        exact: 'partial',
        style_name_suffix: false,
        keys: val
      }
      $(document).SearchHighlight(options);
    }

    $scope.protShowname = function(obj) {

    console.log('*** protShowname ***');
      return obj.showname;
    }


    $scope.fieldvalShowname = function(val) {

    console.log('*** fieldvalShowname ***');
      
      if (val.field) {
        var showname = "";
        for (var i = 0; i < val.field.length; ++i) {
          showname = showname + "<li>" + val.field[0].$.showname + "</li>";
        }
        return val.$.showname + "<ul>" + showname + "</ul>";
      }
      var start = parseInt(val.$.pos);
      var end = start + parseInt(val.$.size) - 1;
      //$scope.hexHighlightHelper.push({'name':val.$.name, 'start':start, 'end':end});

      // console.log('$scope.hexHighlightHelper = ', $scope.hexHighlightHelper);
      // console.log('$scope.hexHighlightHelper.length = ', $scope.hexHighlightHelper.length);

      return val.$.showname;
    }



    // Highlight the 3rd Level Data
    $scope.hightlight_bytes = function(parent) {
      // console.log('parent = ', parent);

      $("span").removeClass('selected').css('background-color','transparent');
      $("span[class^="+parent+"]").addClass('selected').css('background-color','blue');
    }

    $scope.highlight_bytes_below = function(pos, size) {
      //console.log('pos, size = ', pos, ',' , size);
      var end = parseInt(pos) + parseInt(size) - 1;
      var parentClass = [pos]+'_'+[end];

      console.log('parentClass = ', parentClass);
      var pclass = String("."+parentClass);
      $("span").removeClass('selected').css('background-color','transparent');
      $("span[class^="+parentClass+"]").addClass('selected').css('background-color','blue');
    }

    $scope.fieldBytes = function(val) {
      //console.log("fieldByte, pos = ", val.$.pos, ", size = ", val.$.size);
      //console.log("fieldByte, val = ", val);
    }

    $scope.spacing = function(val) {
      //console.log("fieldByte, val = ", val);
      if (val % 8 === 0) {
        if (val % 16 === 0) {
          return " <br>";
        }
        return " . ";
      }
    }

    // Create sample PCAP JSON object
    $scope.pcapData = {};

    $scope.data = [];

    $scope.packet_data = packet_data;
    //console.log('packet_data = ',packet_data);

    // Get HBase PCAP data
    $scope.get_data = function() {
      //var responsePromise = $http.get('http://jsonspitter.apiary.io/things');

      /*responsePromise.success(function(data, status, headers, config) {

        // First Panel Data
        // console.log(data.pdml.packet.length);
        var i = 0;
        var protolist = [];
        for (i = 0; i < data.pdml.packet[0].proto.length; i++){
          protolist.push(data.pdml.packet[0].proto[i]);
        }
        var colNames = [];
        var packet1info = [];
        var packet2info = [];
        var packet3info = [];

        colNames.push(data.pdml.packet[0].proto[0].field[0].$.showname);
        colNames.push(data.pdml.packet[0].proto[1].field[7].$.name);
        colNames.push(data.pdml.packet[0].proto[3].field[10].$.name);
        colNames.push(data.pdml.packet[0].proto[3].field[14].$.name);
        colNames.push(data.pdml.packet[0].proto[4].field[0].$.name);
        // console.log(colNames);

        packet1info.push(data.pdml.packet[0].proto[0].field[0].$.show);
        packet1info.push(data.pdml.packet[0].proto[1].field[7].$.show);
        packet1info.push(data.pdml.packet[0].proto[3].field[10].$.show);
        packet1info.push(data.pdml.packet[0].proto[3].field[14].$.show);
        packet1info.push(data.pdml.packet[0].proto[4].field[0].$.showname);

        packet2info.push(data.pdml.packet[1].proto[0].field[0].$.show);
        packet2info.push(data.pdml.packet[1].proto[1].field[7].$.show);
        packet2info.push(data.pdml.packet[1].proto[3].field[10].$.show);
        packet2info.push(data.pdml.packet[1].proto[3].field[14].$.show);
        packet2info.push(data.pdml.packet[1].proto[4].field[0].$.showname);

        packet3info.push(data.pdml.packet[2].proto[0].field[0].$.show);
        packet3info.push(data.pdml.packet[2].proto[1].field[7].$.show);
        packet3info.push(data.pdml.packet[2].proto[3].field[10].$.show);
        packet3info.push(data.pdml.packet[2].proto[3].field[14].$.show);
        packet3info.push(data.pdml.packet[2].proto[4].field[0].$.showname);


        var basicInfo = [];
        basicInfo.push(packet1info);
        basicInfo.push(packet2info);
        basicInfo.push(packet3info);
        // console.log(basicInfo);

        $scope.colNames = colNames;
        $scope.basicInfo = basicInfo;

        // Populate thescope with data
        $scope.data = _.map(data.pdml.packet, function(result) {
          var _h = _.clone(result);
          return _h;
        });

        $scope.hexData = data.pdml.packet[0].proto[4].field[4].field[4].hexPacket;

       

        $scope.hexHighlightHelper_map = [];

        // console.log('$scope.data = ', $scope.data);

        $scope.lvl0 = data.pdml.packet[0].proto[0].field;
        // console.log('$scope.lvl0', $scope.lvl0);

        $scope.lvl1 = data.pdml.packet[0].proto[1].field;
        // console.log('$scope.lvl1', $scope.lvl1);

        for (var i = 0; i < $scope.lvl1.length; ++i) {
          // console.log('$scope.lvl1['+i+'].$.showname = ', $scope.lvl1[i].$.showname);
        }

        $scope.lvl1_frame_num = data.pdml.packet[0].proto[1].field[8].$.show;
        // console.log('$scope.lvl1_frame_num', $scope.lvl1_frame_num);

        $scope.lvl2 = data.pdml.packet[0].proto[2].field;
        // console.log('$scope.lvl2', $scope.lvl2);

        $scope.lvl2_0 = data.pdml.packet[0].proto[2].field[0].field;
        // console.log('$scope.lvl2_0', $scope.lvl2_0);

        $scope.lvl2_0_0 = data.pdml.packet[0].proto[2].field[0].field[0];
        // console.log('$scope.lvl2_0_0', $scope.lvl2_0_0);

        //$scope.hexData = data.pdml.packet[0].proto[5].hexPacket;
        //console.log('$scope.hexData', $scope.hexData);


        // Map Packet Bytes
        // TODO: Create function that parses packet and maps start byte position
        //         of fieldname & end start position in a tree in angular (or a hashtable of bytes)
        var templength = $scope.lvl2.length;
       //  console.log('$scope.lvl2.length = ', templength);

        templength = $scope.lvl2[0].field.length;
        // console.log('$scope.lvl2-0.length = ', templength);

        templength = $scope.lvl2[1].field.length;
        // console.log('$scope.lvl2-1.length = ', templength);

        if ($scope.lvl2[2].field) {
          templength = $scope.lvl2[2].field.length;
          // console.log('$scope.lvl2-2.length = ', templength);
        }
        else {
          // console.log('no $scope.lvl2-2.length = ');
        }

        var hex = {

        "hex": [{"$":{ "byte_num": "0", "byte": "01"}},{"$":{ "byte_num": "1", "byte": "00"}},{"$":{ "byte_num": "2", "byte": "5e"}}]

        };

          var hexMapped = [];

          // console.log($scope.hexData)
          for ( var i = 0 ; i < $scope.hexData.length ; ++i) {
            hexMapped.push({"byte_num": i, "byte": $scope.hexData[i], "parent": "-1" });
          }
          for ( var i = 0 ; i < 6 ; ++i) {
            hexMapped[i]['parent'] = "0_5";
          }
          for ( var i = 6 ; i < 12 ; ++i) {
            hexMapped[i]['parent'] = "6_11";
          }
          for ( var i = 12 ; i < 14 ; ++i) {
            hexMapped[i]['parent'] = "12_13";
          }

            hexMapped[14]['parent'] = "14_14";
            hexMapped[15]['parent'] = "15_15";
            hexMapped[16]['parent'] = "16_17";
            hexMapped[17]['parent'] = "16_17";
            hexMapped[18]['parent'] = "18_19";
            hexMapped[19]['parent'] = "18_19";
            hexMapped[20]['parent'] = "20_20";
            hexMapped[21]['parent'] = "20_21";
            hexMapped[22]['parent'] = "22_22";
            hexMapped[23]['parent'] = "23_23";
            hexMapped[24]['parent'] = "24_25";
            hexMapped[25]['parent'] = "24_25";
            hexMapped[26]['parent'] = "26_29";
            hexMapped[27]['parent'] = "26_29";
            hexMapped[28]['parent'] = "26_29";
            hexMapped[29]['parent'] = "26_29";
            hexMapped[30]['parent'] = "30_33";
            hexMapped[31]['parent'] = "30_33";
            hexMapped[32]['parent'] = "30_33";
            hexMapped[33]['parent'] = "30_33";
            hexMapped[34]['parent'] = "34_37";
            hexMapped[35]['parent'] = "34_37";
            hexMapped[36]['parent'] = "34_37";
            hexMapped[37]['parent'] = "34_37";
          // console.log('hexMapped[] = ', hexMapped);

          $scope.hexData = hexMapped;

      });
*/

      // responsePromise.error(function(data, status, headers, config) {
      //   console.log('AJAX Failed');
      // });
    };


  });

  module.directive('markdown', function() {
    return {
      restrict: 'E',
      link: function(scope, element) {
        scope.$on('render', function() {
          render_panel();
        });

        function render_panel() {
          require(['./lib/showdown'], function (Showdown) {
            scope.ready = true;
            var converter = new Showdown.converter();
            var pcap = scope.panel.content.replace(/&/g, '&amp;')
              .replace(/>/g, '&gt;')
              .replace(/</g, '&lt;');
            var htmlText = converter.makeHtml(pcap);
            element.html(htmlText);
            // For whatever reason, this fixes chrome. I don't like it, I think
            // it makes things slow?
            if(!scope.$$phase) {
              scope.$apply();
            }
          });
        }

        render_panel();
      }
    };
  });

  module.filter('newlines', function(){
    return function (input) {
      return input.replace(/\n/g, '<br/>');
    };
  });

  module.filter('striphtml', function () {
    return function(pcap) {
      return pcap
        .replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;');
    };
  });

  module.filter('num', function() {
    return function(input) {
      return parseInt(input, 10);
    }
  });


  module.directive('packet', function() {
    return {
      templateUrl: 'packet.html',
      scope: {
        packet: '='
      },
      link: function(scope, elm, attr) {
        scope.select = function(proto) {
          scope.selectedBytes = proto.$;
          scope.selectedData = proto.$.name;
          console.log('proto = ',proto);
          console.log('scope.selectedBytes = ',scope.selectedBytes);
        };
        scope.select_field = function(field) {
          scope.selectedBytes = field.$;
          scope.selectedData = field.$;
          console.log('field = ',field);
          console.log('scope.selectedBytes = ',scope.selectedBytes);
        };

        scope.highlightMap = [];

        

        scope.showName = function(obj) {
          //console.log('pos = ',obj.pos);
          //console.log('size = ',obj.size);
          //console.log('obj = ',obj);
          //var end = parseInt(obj.pos) + parseInt(obj.size) - 1;

          //scope.highlightMap.push({'start': parseInt(obj.pos), 'end': end});
          //console.log('highlightMap', scope.highlightMap);

       /*   for (var i = obj.pos; i < obj.size; i++) {

          }*/
          //console.log('obj.showname = ', obj.showname);

          //$scope.hexBytesHelper = new Array(4);
          var start, end;
          var temp_string, temp_hash;
          var temp_obj = {};


          if (obj.$.name != 'geninfo' && obj.field) {
            for (var i = 0; i < obj.field.length; i++) {
              start = parseInt(obj.field[i].$.pos);
              end = start + parseInt(obj.field[i].$.size) - 1;

              // TODO: generate random ID [see stackoverflow for generating random ID hash]
              if (end >= start) {
                temp_string = String(obj.field[i].$.name);
                temp_hash = (Math.random() + 1).toString(36).substring(7);//crypto.randomBytes(20).toString('hex');
                console.log('temp_hash', temp_hash);
                temp_string = temp_string + '_' + temp_hash;

                //temp_string = obj.field[i].$;

                temp_obj[temp_string] = {'start':start, 'end':end};


                console.log('obj.field[i].$.name = ', obj.field[i].$.name);
                hexHighlightHelper.push(temp_obj);
               /* if (temp_string && temp_string != ""){
                  hexHighlightHelper.push({ ''+temp_string : {'start':start, 'end':end}});
                }*/
              }
            }

          }

          // console.log('val.$.pos, val.$.size = ', val.$.pos, ', ', val.$.size);
          // console.log('end = ', end);
           //console.log('hexHighlightHelper = ', hexHighlightHelper);

          //for (var i = start; i <= end; i++){
            
          //}

          return obj.$.showname;
        };

        scope.get_end = function(obj) {
          console.log('pos = ',obj.pos);
          console.log('size = ',obj.size);
          console.log('obj = ',obj);
          var start = parseInt(obj.pos);
          var end = start + parseInt(obj.size) - 1;
          console.log('start = ',start);
          console.log('end = ',end);
          if (end >= start) {
            return end;
          }
          else { 
            return start;
          }
            return start;
        };

        scope.$watch('packet', function(value, newValue) {
          console.log('value: ', value);
          console.log('newValue: ', newValue);

          hexHighlightHelper = [];
          mapped_hex_data = new Array(value.hexPacket.length);
          console.log('value.hexPacket.length = ', value.hexPacket.length);
          console.log('mapped_hex_data: ', mapped_hex_data);
          console.log('mapped_hex_data.length: ', mapped_hex_data.length);

          scope.map_the_hex_bytes = function (value) {
            console.log('hexHighlightHelper:: ', hexHighlightHelper);

            /*for (var i = 0; i < hexHighlightHelper.length; i++){
                
            }*/
          };
          scope.map_the_hex_bytes(value);

          
        });
      }
    };
  });


  module.directive('hexBytes', function() {
    return {
      templateUrl: 'hexBytes.html',
      scope: {
        selected: '=',
        bytes: '='
      },
      link: function(scope, elm, attr) {

        scope.selectByte = function($b) {
          console.log('b = ',$b);
          alert('b = ', $b);
        };

      }
    };
  });

});


