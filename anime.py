import bpy
import math

# 既存のオブジェクトを全部消す
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# 球を作る
bpy.ops.mesh.primitive_uv_sphere_add(radius=1, location=(0, 0, 0))
ball = bpy.context.object

# タイムラインの設定
scene = bpy.context.scene
scene.frame_start = 1
scene.frame_end = 60

# フレームごとにY座標を上下に動かす
for frame in range(scene.frame_start, scene.frame_end + 1):
    # sin波で上下運動を作る
    y = abs(math.sin(frame * 0.1)) * 3
    ball.location = (0, 0, y)
    ball.keyframe_insert(data_path="location", frame=frame)
