
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: get_posts.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m00.0s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [ 100% ] 1 VUs  00m00.0s/10m0s  1/1 iters, 1 per VU

     data_received..................: 1.3 kB 50 kB/s
     data_sent......................: 329 B  12 kB/s
     http_req_blocked...............: min=8.00ms  avg=8.00ms  med=8.00ms  p(99)=8.00ms  p(99.9)=8.00ms  max=8.00ms  count=1
     http_req_connecting............: min=1.00ms  avg=1.00ms  med=1.00ms  p(99)=1.00ms  p(99.9)=1.00ms  max=1.00ms  count=1
     http_req_duration..............: min=16.00ms avg=16.00ms med=16.00ms p(99)=16.00ms p(99.9)=16.00ms max=16.00ms count=1
       { expected_response:true }...: min=16.00ms avg=16.00ms med=16.00ms p(99)=16.00ms p(99.9)=16.00ms max=16.00ms count=1
     http_req_failed................: 0.00%  ✓ 0         ✗ 1
     http_req_receiving.............: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_sending...............: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_tls_handshaking.......: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_waiting...............: min=16.00ms avg=16.00ms med=16.00ms p(99)=16.00ms p(99.9)=16.00ms max=16.00ms count=1
     http_reqs......................: 1      37.348133/s
     iteration_duration.............: min=24.69ms avg=24.69ms med=24.69ms p(99)=24.69ms p(99.9)=24.69ms max=24.69ms count=1
     iterations.....................: 1      37.348133/s

