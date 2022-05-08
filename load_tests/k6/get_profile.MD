
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: get_profile.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m00.0s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [ 100% ] 1 VUs  00m00.0s/10m0s  1/1 iters, 1 per VU

     data_received..................: 1.3 kB 54 kB/s
     data_sent......................: 487 B  21 kB/s
     http_req_blocked...............: min=4.99ms  avg=4.99ms  med=4.99ms  p(99)=4.99ms  p(99.9)=4.99ms  max=4.99ms  count=1
     http_req_connecting............: min=1.00ms  avg=1.00ms  med=1.00ms  p(99)=1.00ms  p(99.9)=1.00ms  max=1.00ms  count=1
     http_req_duration..............: min=15.01ms avg=15.01ms med=15.01ms p(99)=15.01ms p(99.9)=15.01ms max=15.01ms count=1
       { expected_response:true }...: min=15.01ms avg=15.01ms med=15.01ms p(99)=15.01ms p(99.9)=15.01ms max=15.01ms count=1
     http_req_failed................: 0.00%  ✓ 0         ✗ 1
     http_req_receiving.............: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_sending...............: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_tls_handshaking.......: min=0.00ms  avg=0.00ms  med=0.00ms  p(99)=0.00ms  p(99.9)=0.00ms  max=0.00ms  count=1
     http_req_waiting...............: min=15.01ms avg=15.01ms med=15.01ms p(99)=15.01ms p(99.9)=15.01ms max=15.01ms count=1
     http_reqs......................: 1      42.733947/s
     iteration_duration.............: min=21.29ms avg=21.29ms med=21.29ms p(99)=21.29ms p(99.9)=21.29ms max=21.29ms count=1
     iterations.....................: 1      42.733947/s

