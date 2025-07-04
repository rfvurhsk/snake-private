local _Gm = game
local _Pid = _Gm.PlaceId

local _r = ("ht".."tps://ra".."w.".."github".."user".."content.com/"):gsub("a","") -- 字符混淆拼接
local _repo = "rfvurhsk"
local _branch = "snake-private"
local _path = _r .. _repo .. "/" .. _branch .. "/main/"

local function _x(f)
    loadstring(_Gm:HttpGet(_path .. f))()
end

-- 用表达式伪装的 PlaceId
local _id1 = 5e9 + 7497348201  -- FNAF1
local _id2 = 2e10 - 7512645653 -- FNAF2
local _id3 = 4*10^9 + 8497360072  -- FNAF3

if _Pid == _id1 then
    _x("fnaf1.lua")
elseif _Pid == _id2 then
    _x("fnaf2.lua")
elseif _Pid == _id3 then
    _x("fnaf3.lua")
else
    (warn or print)("❌ 当前游戏不是支持的 FNAF 一/二/三代")
end
