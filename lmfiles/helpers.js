[
  {
    text: 'Conditionals',
    cls: 'folder',
    expanded: false,
    children: [
      {
        text: 'If - Then',
        leaf: true,
        script: "if (condition) then\n  dosomething()\nend"
      },
      {
        text: 'If (AND) - Then',
        leaf: true,
        script: "if (condition1 and condition2) then\n  dosomething()\nend"
      },
      {
        text: 'If (OR) - Then',
        leaf: true,
        script: "if (condition or condition2) then\n  dosomething()\nend"
      },
      {
        text: 'If - Then - Else',
        leaf: true,
        script: "if (condition) then\n  dosomething()\nelse\n  dosomethingelse()\nend"
      },
      {
        text: 'If - Else If',
        leaf: true,
        script: "if (condition) then\n  dosomething()\nelseif (othercondition) then\n  dosomethingelse()\nend"
      }
    ]
  },
  {
    text: 'Loops and iterators',
    cls: 'folder',
    expanded: false,
    children: [
      {
        text: 'Hashtable iteration',
        leaf: true,
        script: "-- hashtable = { a = 1, b = 2, c = 3 }\nfor key, value in pairs(hashtable) do\n  dosomething()\nend"
      },
      {
        text: 'Array iteration',
        leaf: true,
        script: "-- arraytable = { 'a', 'b', 'c' }\nfor index, value in ipairs(arraytable) do\n  dosomething()\nend"
      },
      {
        text: 'Numeric for loop',
        leaf: true,
        script: "-- for i = START, STOP, STEP\nfor i = 1, 10, 2 do\n  dosomething()\nend"
      },
      {
        text: 'While loop',
        leaf: true,
        script: "-- loop while condition is met\nwhile (condition) do\n  dosomething()\nend"
      },
      {
        text: 'Repeat..until loop',
        leaf: true,
        script: "-- loop until condition is met\nrepeat\n  dosomething()\nuntil (condition)"
      }
    ]
  },
  {
    text: 'Math',
    cls: 'folder',
    expanded: false,
    children: [
      {
        text: 'Absolute value',
        leaf: true,
        script: "-- e.g. x = -12, y = 12\ny = math.abs(x)"
      },
      {
        text: 'Ceiling',
        leaf: true,
        script: "-- e.g. x = 12.2, y = 13\ny = math.ceil(x)"
      },
      {
        text: 'Floor',
        leaf: true,
        script: "-- e.g. x = 12.7, y = 12\ny = math.floor(x)"
      },
      {
        text: 'Round to integer',
        leaf: true,
        script: "-- e.g. x = 12.7, y = 13; x = 12.3, y = 12\ny = math.floor(x + 0.5)"
      },
      {
        text: 'Random value',
        leaf: true,
        script: "-- get random integer value between min and max (inclusive)\ny = math.random(min, max)"
      }
    ]
  },
  {
    text: 'Objects / KNX bus',
    cls: 'folder',
    expanded: false,
    children: [
      {
        text: 'Get event value',
        leaf: true,
        script: "-- object mapped to this event must have its data type set\nvalue = event.getvalue()"
      },
      {
        text: 'Get object value (by name)',
        leaf: true,
        script: "-- get value of object named 'my object'\nvalue = grp.getvalue(|>'my object'<|)"
      },
      {
        text: 'Get object value (by address)',
        leaf: true,
        script: "-- get value of object with group address 1/1/1\nvalue = grp.getvalue(|>'1/1/1'<|)"
      },
      {
        text: 'Group read (by name)',
        leaf: true,
        script: "-- send read request to object named 'my object'\ngrp.read(|>'my object'<|)"
      },
      {
        text: 'Group read (by address)',
        leaf: true,
        script: "-- send read request to 1/1/1\ngrp.read(|>'1/1/1'<|)"
      },
      {
        text: 'Group write (by name, constant)',
        leaf: true,
        script: "-- write value (e.g. boolean 'true') to object named 'my object', datatype must be set for this object\ngrp.write(|>'my object'<|, true)"
      },
      {
        text: 'Group write (by address, constant)',
        leaf: true,
        script: "-- write value (e.g. boolean 'true') to object with group address 1/1/1, datatype must be set for this object\ngrp.write(|>'1/1/1'<|, true)"
      },
      {
        text: 'Group write (by name, variable)',
        leaf: true,
        script: "-- write value (e.g. number '12.1') to object named 'my object', datatype must be set for this object\nvalue = 12.1\ngrp.write(|>'my object'<|, value)"
      },
      {
        text: 'Group write (by address, variable)',
        leaf: true,
        script: "-- write value (e.g. number '12.1') to object with group address 1/1/1, datatype must be set for this object\nvalue = 12.1\ngrp.write(|>'1/1/1'<|, value)"
      },
      {
        text: 'Update internal value (by name)',
        leaf: true,
        script: "-- no KNX/TP telegram is sent, only database value is changed\ngrp.update(|>'my object'<|, 123)"
      },
      {
        text: 'Update internal value (by address)',
        leaf: true,
        script: "-- no KNX/TP telegram is sent, only database value is changed\ngrp.update(|>'1/1/1'<|, 123)"
      },
      {
        text: 'Convert name to group address',
        leaf: true,
        script: "address = grp.alias(|>'my object'<|)"
      },
      {
        text: 'Convert group address to name',
        leaf: true,
        script: "name = grp.alias(|>'1/1/1'<|)"
      },
      {
        text: 'Single object functions',
        cls: 'folder',
        expanded: false,
        children: [
          {
            text: 'Find object (by address)',
            leaf: true,
            script: "-- get object with address 1/1/1\nmyobject = grp.find(|>'1/1/1'<|)"
          },
          {
            text: 'Find object (by name)',
            leaf: true,
            script: "-- get object with name 'my object'\nmyobject = grp.find(|>'my object'<|)"
          },
          {
            text: 'Write value to bus',
            leaf: true,
            script: "-- write value (e.g. 127) to the object\nmyobject:write(127)"
          },
          {
            text: 'Send read request to bus',
            leaf: true,
            script: "-- write value (e.g. 127) to the object\nmyobject:read()"
          }
        ]
      },
      {
        text: 'Multiple object functions (tags)',
        cls: 'folder',
        expanded: false,
        children: [
          {
            text: 'Find by single tag',
            leaf: true,
            script: "-- get an array of objects tagged 'tag name'\nmyobjects = grp.tag(|>'tag name'<|)"
          },
          {
            text: 'Find by multiple tags (match all)',
            leaf: true,
            script: "-- get an array of objects tagged 'tag name 1' AND 'tag name 2'\nmyobjects = grp.tag({'tag name 1', 'tag name 2'}, 'all')"
          },
          {
            text: 'Find by multiple tags (match any)',
            leaf: true,
            script: "-- get an array of objects tagged 'tag name 1' OR 'tag name 2'\nmyobjects = grp.tag({'tag name 1', 'tag name 2'}, 'any')"
          },
          {
            text: 'Write value to bus',
            leaf: true,
            script: "-- write value (e.g. 127) to the object\nmyobjects:write(127)"
          },
          {
            text: 'Send read request to bus',
            leaf: true,
            script: "-- read all tagged objects\nmyobjects:read()"
          }
        ]
      }
    ]
  },
  {
    text: 'Storage',
    cls: 'folder',
    expanded: false,
    children: [
      {
        text: 'Get data from storage',
        leaf: true,
        script: "-- mydata will be set nil when data was not found\nmydata = storage.get(|>'myobjectdata'<|)"
      },
      {
        text: 'Get data (with default value)',
        leaf: true,
        script: "-- mydata will be set to a predefined value (e.g. 127) when data was not found\nmydata = storage.get(|>'myobjectdata'<|, 127)"
      },
      {
        text: 'Save data to storage',
        leaf: true,
        script: "-- set storage variable myobjectdata to a specified value (e.g. 127)\nstorage.set(|>'myobjectdata'<|, 127)"
      }
    ]
  },
  {
    text: 'Script control',
    cls: 'folder',
    expanded: false,
    children: [
      {
        text: 'Enable script',
        leaf: true,
        script: "script.enable(|>'scriptname'<|)"
      },
      {
        text: 'Disable script',
        leaf: true,
        script: "script.disable(|>'scriptname'<|)"
      },
      {
        text: 'Get script status',
        leaf: true,
        script: "-- return true/false if script is found, nil otherwise\nstatus = script.status(|>'scriptname'<|)"
      }
    ]
  },
  {
    text: 'Alerts and logs',
    cls: 'folder',
    expanded: false,
    children: [
      {
        text: 'Alert',
        leaf: true,
        script: "alert('|>My alert text<|')"
      },
      {
        text: 'Formatted alert',
        leaf: true,
        script: "-- see string.format for more info\nalert('Group address %s, numeric value: %d', '1/1/1', 127)"
      },
      {
        text: 'Log variables',
        leaf: true,
        script: "a = { f1 = 10, f2 = 20 }\nb = 127\nc = 'test'\n-- all passed arguments will appear in Logs module\nlog(a, b, c)"
      }
    ]
  },
  {
    text: 'Time functions',
    cls: 'folder',
    expanded: false,
    children: [
      {
        text: 'Delay script execution',
        leaf: true,
        script: "-- wait for 1.5 seconds\nos.sleep(|>1.5<|)"
      }
    ]
  },
  {
    text: 'Miscellaneous',
    cls: 'folder',
    expanded: false,
    children: [
      {
        text: 'Send an e-mail',
        leaf: true,
        script: "-- make sure mail settings are set in user function library before using this function\nsubject = 'E-mail test'\nmessage = 'Testing e-mail'\nmail('user@example.com', subject, message)"
      },
      {
        text: 'Sunrise / sunset',
        leaf: true,
        script: "-- returns number of minutes from 0:00 until sunrise and sunset\nlatitude = 57\nlongitude = 24.15\nsunrise, sunset = rscalc(latitude, longitude)"
      },
      {
        text: 'Convert sunrise / sunset to readable time',
        leaf: true,
        script: "sunrise = string.format('%d:%.2d', math.floor(sunrise / 60), sunrise % 60)\nsunset = string.format('%d:%.2d', math.floor(sunset / 60), sunset % 60)"
      }
    ]
  },
  {
    text: 'Serial',
    cls: 'folder',
    expanded: false,
    children: [
      {
        text: 'Open connection',
        leaf: true,
        script: "require('serial')\nport = serial.open('/dev/RS232', {\n  baudrate = 38400,\n  databits = 8,\n  stopbits = 1,\n  parity = 'none',\n  duplex = 'full'\n})"
      },
      {
        text: 'Write to port',
        leaf: true,
        script: "port:write('test data')"
      },
      {
        text: 'Blocking read',
        leaf: true,
        script: "-- script will block until 10 characters are read\ndata = port:read(10)"
      },
      {
        text: 'Timeout read',
        leaf: true,
        script: "-- script will wait for 10 characters for 20 seconds\ndata = port:read(10, 20)"
      },
      {
        text: 'Close serial port',
        leaf: true,
        script: "port:close()"
      }
    ]
  },
  {
    text: 'Modbus',
    cls: 'folder',
    expanded: false,
    children: [
      {
        text: 'Create Modbus TCP object',
        leaf: true,
        script: "require('luamodbus')\nmb = luamodbus.tcp()"
      },
      {
        text: 'Create Modbus RTU object',
        leaf: true,
        script: "require('luamodbus')\nmb = luamodbus.rtu()"
      },
      {
        text: 'Open Modbus TCP connection',
        leaf: true,
        script: "-- IP: 192.168.1.2, port: 1234\nmb:open('192.168.1.2', 1234)\nmb:connect()"
      },
      {
        text: 'Open Modbus RTU connection',
        leaf: true,
        script: "-- 19200 baud rate, even parity, 8 data bits, 1 stop bit, half duplex\nmb:open('/dev/RS485', 19200, 'E', 8, 1, 'H')\nmb:connect()"
      },
      {
        text: 'Set slave address',
        leaf: true,
        script: "mb:setslave(123)"
      },
      {
        text: 'Read single coil',
        leaf: true,
        script: "-- read 1 coil from address 1000\ncoil = mb:readcoils(1000)"
      },
      {
        text: 'Read multiple coils',
        leaf: true,
        script: "-- read 3 coils from address 1000\ncoil1, coil2, coil3 = mb:readcoils(1000, 3)"
      },
      {
        text: 'Read discrete input',
        leaf: true,
        script: "-- read from address 1000\nvalue = mb:readdiscreteinputs(1000)"
      },
      {
        text: 'Read registers',
        leaf: true,
        script: "-- read from address 1000\nvalue = mb:readregisters(1000)"
      },
      {
        text: 'Read input registers',
        leaf: true,
        script: "-- read from address 1000\nvalue = mb:readinputregisters(1000)"
      },
      {
        text: 'Write single bit',
        leaf: true,
        script: "-- set bit at address 1000 to 'on'\nmb:writebits(1000, true)"
      },
      {
        text: 'Write multiple bits',
        leaf: true,
        script: "-- set bit at address 1000 to 'on', bit at address 1001 to 'off'\nmb:writebits(1000, true, false)"
      },
      {
        text: 'Write single register',
        leaf: true,
        script: "-- set register at address 1000 to 123\nmb:writeregisters(1000, 123)"
      },
      {
        text: 'Write multiple registers',
        leaf: true,
        script: "-- set register at address 1000 to 123, register at address 1001 to 321\nmb:writeregisters(1000, 123, 321)"
      },
      {
        text: 'Close modbus connection',
        leaf: true,
        script: "mb:close()"
      }
    ]
  },
  {
    text: 'DMX',
    cls: 'folder',
    expanded: false,
    children: [
      {
        text: 'Open connection',
        leaf: true,
        script: "-- opens new DMX connection\nrequire('luadmx')\ndm, err = luadmx.open('/dev/ttyRS485')\n\nif not dm then\n  alert('DMX error')\n  return\nend"
      },
      {
        text: 'Set number of channels to use',
        leaf: true,
        script: "-- min 1, max 512\ndm:setcount(10)"
      },
      {
        text: 'Get number of channels to use',
        leaf: true,
        script: "-- min 1, max 512\ncount = dm:getcount()"
      },
      {
        text: 'Set all channels to a given value',
        leaf: true,
        script: "-- all 512 channel values will be set to 127\ndm:setall(127)"
      },
      {
        text: 'Set specific channel value',
        leaf: true,
        script: "-- channel 5 value set to 127\ndm:setchannel(5, 127)"
      },
      {
        text: 'Get specific channel value',
        leaf: true,
        script: "-- get channel 5\nvalue = dm:getchannel(5)"
      },
      {
        text: 'Send data to bus',
        leaf: true,
        script: "-- data must be sent at least one per second\nvalue = dm:send()"
      }
    ]
  }
]
