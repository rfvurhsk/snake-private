local _Gm = game
local _Pid = _Gm.PlaceId

local _r = ("ht".."tps://ra".."w.".."github".."user".."content.com/"):gsub("a","")
local _repo = "rfvurhsk"
local _branch = "snake-private"
local _path = _r .. _repo .. "/" .. _branch .. "/main/"

local function _x(f)
    loadstring(_Gm:HttpGet(_path .. f))()
end

local _id1 = 5e9 + 7497348201  -- 12497348201
local _id2 = 2e10 - 7512645653 -- 12497354347
local _id3 = 4e9 + 8497360072  -- 12497360072

if _Pid == _id1 then
    _x("fnaf1.lua")
elseif _Pid == _id2 then
    _x("fnaf2.lua")
elseif _Pid == _id3 then
    _x("fnaf3.lua")
else
    (warn or print)("❌ 当前游戏不是支持的 FNAF 一/二/三代")
end
